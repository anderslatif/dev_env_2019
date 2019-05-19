const app = require('express')();

app.use(express.json());
app.use(express.urlencoded());

const objection = require('objection');

const { Model } = objection;
const Knex = require('knex');
const knexConfig = require('./knexfile.js');

// Initialize knex
const knex = Knex(knexConfig.development);

Model.knex(knex);

const db = {
  Knex: knex,
  UserRole: require('./models/UserRole.js'),
};

const userRoutes = require('./routes/user');

userRoutes.userRoutes(app, db);


const SwaggerExpress = require('swagger-express-mw');

module.exports = app; // for testing

const config = {
  appRoot: __dirname, // required config
};

const session = require('express-session');

app.use(session({
  secret: 'ThisIsMySecretHopeYouNeverGuessIt',
  resave: true,
  saveUninitialized: false,
}));

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const server = app.listen(8080, (error) => {
    if (error) {
      console.log('Could not listen on port: %d.', server.address().port);
    } else {
      console.log('Listening on port: %d.', server.address().port);
    }
  });

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(`try this:\ncurl http://127.0.0.1:${port}/hello?name=Scott`);
  }
});
