const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(res.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        })
    }
}

// Detele: /city/:id
const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(res.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}

// GET: /city/:id
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(res.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the city',
            err: error
        })
    }
}

// Patch: /city/:id
const update = async(req, res) => {
    try {
        const city = await cityService.updateCity(res.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        })
    }
}

module.exports = {
    create, 
    destroy, 
    get, 
    update
}