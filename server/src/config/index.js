require('dotenv');

module.exports = {
  server: {
    PORT: process.env.PORT,
  },
  db: {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
