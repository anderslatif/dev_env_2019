exports.siteRoutes = (app, db) => {
  app.get('sites', (req, res) => {
    res.send('not implemented yet');
  });

  app.post('/sites', async (req, res) => {
    const siteCreated = await db.Site.query().insert(req.body);
    res.status(200).send(siteCreated);
  });
};
