exports.orderRoutes = (app, db) => {
  app.get('/orders', async (req, res) => {
    const { userRoleId } = req.session;
    if (/* userRoleId <= 3 */ true) {
      const result = await db.Order.query().orderBy('timestamp');
      res.send(result);
    } else {
      res.status(403).send();
    }
  });

  app.get('/orders/:orderId', async (req, res) => {
    const { userRoleId } = req.session;
    if (/* userRoleId <= 3 */ true) {
      const result = await db.Order.query().findById(req.params.orderId);
      res.send(result);
    } else {
      res.status(403).send();
    }
  });

  app.post('/orders', async (req, res) => {
    const { userRoleId } = req.session;
    if (/* userRoleId <= 3 */ true) {
      const order = db.Order.query().insert({ ...req.body });
      res.status(200).send(order);
    } else {
      res.status(403).send();
    }
  });
};
