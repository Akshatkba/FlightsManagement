const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        // if any of the request params are missing then we come inside if and return an error
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid request body",
            err: "Missing mandatory properties to create a flight"
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}