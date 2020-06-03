const mongoose = require('mongoose');

const {
  db,
} = require('./index');

const getMongURI = () => {
  const name = db.DB_NAME;
  // const user = db.DB_USER;
  // const password = db.DB_PASSWORD;
  const host = db.DB_HOST;
  const port = db.DB_PORT || 27017;
  return Promise.resolve(`mongodb://${host}:${port}/${name}`);
};

const connectDB = async () => {
  const mongoURI = await getMongURI();
  const options = {
    user: db.DB_USER,
    password: db.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  return mongoose.connect(mongoURI, options);
};

module.exports = {
  connectDB,
};
