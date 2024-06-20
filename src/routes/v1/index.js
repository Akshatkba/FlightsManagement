const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index')

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

router.post('/airports', AirportController.create);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports/:id', AirportController.get);
router.patch('/airports/:id', AirportController.update);

router.post('/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);
module.exports = router;