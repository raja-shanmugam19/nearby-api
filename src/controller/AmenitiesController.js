const amentiesService = require('../services/AmenitiesService');

// send  response to client
const getAmenities = async (req, res) => {
  const response = await amentiesService.getAmenitiesList();
  res.send(response);
};

module.exports = {
  getAmenities,
};
