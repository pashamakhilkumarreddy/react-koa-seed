const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const path = require('path');

const config = require('./config');
const {
  connectDB
} = require('./config/db');

const app = new Koa();
const PORT = config.server.PORT || 3000;

app.use(koaBody());
app.use(cors());
app.use(helmet());
app.use(compression());

require(path.join(__dirname, 'routes'))(app);

connectDB().then(() => {
  console.info('Successfully connected to the database');
  app.listen(PORT, () => {
    console.info(`Application is up and running on PORT: ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database');
  console.error(err);
});
