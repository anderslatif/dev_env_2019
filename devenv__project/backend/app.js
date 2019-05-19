const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const objection = require('objection');

const { Model } = objection;
const Knex = require('knex');
const knexConfig = require('./knexfile.js');

// Initialize knex
const knex = Knex(knexConfig.development);

Model.knex(knex);

const db = {
  Knex: knex,
  User: require('./models/User.js'),
  UserRole: require('./models/UserRole.js'),
  Order: require('./models/Order.js'),
};

const session = require('express-session');

app.use(session({
  secret: 'ThisIsMySecretHopeYouNeverGuessIt',
  resave: true,
  saveUninitialized: false,
}));

const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const siteRoutes = require('./routes/site');

userRoutes.userRoutes(app, db);
orderRoutes.orderRoutes(app, db);
siteRoutes.siteRoutes(app, db);

module.exports = app; // for testing

const config = {
  appRoot: __dirname, // required config
};


app.listen(3000, (error) => {
  if (error) {
    console.log('Error starting the server: ', error);
  }
  console.log('Server is running');
});
