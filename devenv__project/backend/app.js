const app = require('express')();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const objection = require('objection');
const Model = objection.Model;
const Knex = require('knex');
const knexConfig = require('./knexfile.js');

// Initialize knex
const knex = Knex(knexConfig.development);

Model.knex(knex);

const db = {
    "Knex": knex,
    "UserRole": require('./models/UserRole.js'),
};

const userRoutes = require('./routes/user');
userRoutes.userRoutes(app, db);


const server = app.listen(8080, (err) => {
    if (err) {
        console.log("Could not listen on port: %d.", server.address().port);
    } else {
        console.log("Listening on port: %d.", server.address().port);
    }
});
