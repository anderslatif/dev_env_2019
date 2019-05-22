/*eslint-disable*/
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

const customAuthMiddleware = (req, res, next) => {
/*  const userGet = {
    route: '/users',
    method: 'GET',
    allowedRoles: [0, 1, 2, 4, 5],
  };
  const routes = [userGet];
  routes.forEach((route) => {
    if (route.route === req.originalUrl && route.method === req.method) {
      if (route.allowedRoles.contains(req.session.userRoleId)) {
        res.next();
      } else {
        res.status(403).send();
      }
    }
  }); */
  res.next();
};

// app.use(customAuthMiddleware);

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

app.listen(8000, (error) => {
  if (error) {
    console.log('Error starting the server: ', error);
  }
  console.log('Server is running');
});
