class Routes {
  static createRoutes(router) {
    const AmenitiesController = require('../controller/AmenitiesController');
    router.get('/amenties', (req, res) => {
      AmenitiesController.getAmenities(req, res);
    });
  }
}
module.exports = Routes;
