const response = require('../../public/data.json');

class AmenitiesService {
  // fetch external data.json and return to the controller
  static async getAmenitiesList() {
    const res = response;
    return res;
  }
}
module.exports = AmenitiesService;
