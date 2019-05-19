const bcrypt = require('bcryptjs');

exports.userRoutes = function (app, db) {
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userArray = await db.User.query().where({ email });
    if (userArray.length === 1) {
      bcrypt.compare(password, userArray[0].password, (error, result) => {
        if (error) {
          console.log('Error comparing passwords', error);
        }
        if (result) {
          req.session.userId = userArray[0].id;
          req.session.userRole = userArray[0].id;
          res.status(200).send({});
        } else {
          res.status(403).send({ response: 'Wrong password' });
        }
      });
    } else {
      res.status(403).send({});
    }
  });

  app.get('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy((error) => {
        if (error) {
          console.log('Error destroying the session: ', error);
          res.status(500).send();
        }
        res.status(200).send();
      });
    }
  });

  app.post('/user', (req, res) => {
    const { password, email, site_id } = req.body;

    bcrypt.hash(password, 8, async (error, hash) => {
      console.log(hash)
      if (error) {
        console.log('Error hashing the password: ', error);
      }
      const userCreated = await db.User.query().insert({ email, password: hash, site_id });
      res.status(200).send(userCreated);
    });
  });

  app.post('/invite-user', (req, res) => {
    // todo send email;
    res.send();
  });
};
