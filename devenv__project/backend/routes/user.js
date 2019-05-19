exports.userRoutes = function (app, db) {

  app.get('/login', (req, res) => {
    res.send();
  });

  app.get('/user', (req, res) => {
    res.send();
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
};
