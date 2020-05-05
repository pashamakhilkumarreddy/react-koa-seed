const Koa = require('koa');

const config = require('./config');

const app = new Koa();

const PORT = config.server.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Application is up and running on ${PORT}`);
});