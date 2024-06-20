const express = require('express');

const CityController = require('../../controllers/city-controllers');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller')

const router = express.Router();

router.post('/city', CityController.create);
router.post('/cities', CityController.createCities);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);
module.exports = router;