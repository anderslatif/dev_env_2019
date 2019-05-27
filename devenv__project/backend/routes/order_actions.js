exports.orderActions = (app, db) => {
  app.post('/gatescanner/:orderId', async (req, res) => {
    const { userRoleId } = req.session;
    const { siteId } = req.body;
    if (/* userRoleId === 1 || userRoleId === 4 */ true) {
      const order = await db.Order.query().findById(req.params.orderId);
      const warehouse = await db.Warehouse.query().where('site_id', siteId).eager('warehouseChemicals');
      if (order) {
        db.GateScan.query().insert({
          order_id: req.params.orderId,
          scanned_by: userRoleId,
        });
        const warehouse = await db.Warehouse.query().where('site_id', siteId).eager('warehouseChemicals');
        /*       const chemicalAQuantity = warehouse.warehouseChemicals.filter(chemical => {
          if (chemical.label === 'A') {
            return chemical.
          }
        }) */
        const chemicalAQuantity = 1;
        if (chemicalAQuantity > 15) {
          // todo send email
        }
        order.patch({ order_status: 'ACCEPTED' });
        // todo Check that A and B never go in the same warehouse

        const loadingPlan = {
          siteId,
          warehouse1: [{ chemicalName: 'A', quantity: 10 }],
          warehouse2: [],
          warehouse3: [],
          warehouse4: [],
          warehouse5: [],
        };
        res.status(200).send(loadingPlan);
      } else {
        res.status(404).send('Sorry, the order was not found');
      }
    } else {
      res.status(403).send();
    }
  });
};
