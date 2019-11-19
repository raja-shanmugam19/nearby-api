const createMiddleware = require('swagger-express-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./src/routes/Routes');

const app = express();
// creating Middeware
createMiddleware('api.yml', app, () => {
// configure app to use bodyParser()
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  const port = 3000;

  app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    next();
  });
  // Routes for the API
  const router = express.Router();
  Routes.createRoutes(router);
  app.use('/', router);

  app.listen(port, () => {
    console.log(`nearby-api app listening on port ${port}!`);
  });
});

module.exports = app;
