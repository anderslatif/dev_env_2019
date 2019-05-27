const bcrypt = require('bcryptjs');

exports.userRoutes = (app, db) => {
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userArray = await db.User.query().where({ email });
    if (userArray.length === 1) {
      bcrypt.compare(password, userArray[0].password, (error, result) => {
        if (error) {
          console.log('Error comparing passwords', error);
        }
        if (result) {
          console.log(userArray[0]);
          req.session.userId = userArray[0].id;
          req.session.userRoleId = userArray[0].user_role_id;
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
    const {
      name, password, email, phone, country, role,
    } = req.body;

    bcrypt.hash(password, 8, async (error, hash) => {
      if (error) {
        console.log('Error hashing the password: ', error);
      }
      const newUser = {
        name,
        country,
        password: hash,
        phone,
        email,
        user_role_id: Number(role),
      };
      const userCreated = await db.User.query().insert(newUser);
      delete userCreated.password;
      res.status(200).send(userCreated);
    });
  });

  app.post('/invite-user', (req, res) => {
    // todo send email;
    res.send();
  });
};
