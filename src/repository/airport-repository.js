const { Airport } = require('../models/index');
const CrudRepository = require('./crud-repository');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
    // async createAirport({ name }){
    //     try {
    //         const airport = await Airport.create({ name });
    //         return airport;
    //     } catch (error) {
    //         console.log('Something went wrong inside createAirport function in airport-repo');
    //         throw (error);
    //     }
    // }
    // async deleteAirport(airportId){
    //     try {
    //         await Airport.destroy({
    //             where: {
    //                 id: airportId
    //             }
    //         })
    //         return true;
    //     } catch (error) {
    //         console.log('Something went wrong inside deleteAirport function in airport-repo');
    //         throw (error);
    //     }
    // }
    // async updateAirport(airportId, data){
    //     try {
    //         const airport = await Airport.findByPk(airportId);
    //         airport.name = data.name;
    //         await airport.save();
    //         return airport;
    //     } catch (error) {
    //         console.log('Something went wrong inside updateAirport function in airport-repo');
    //         throw (error);
    //     }
    // }
    // async getAirport(id){
    //     try {
    //         const airport = await Airport.findByPk(id);
    //         return airport;
    //     } catch (error) {
    //         console.log('Something went wrong inside getAirport function in airport-repo');
    //         throw (error);
    //     }
    // }
}

module.exports = AirportRepository;