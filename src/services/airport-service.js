const { AirportRepository } = require('../repository/index');
const CrudService = require('./crud-service');
class AirportService extends CrudService {
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }

    // async createAirport(data){
    //     try {
    //         const airport = await this.airportRepository.createAirport(data);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in service");
    //         throw (error);
    //     }
    // }
    // async deleteAirport(airportId){
    //     try {
    //         const airport = await this.airportRepository.deleteAirport(airportId);
    //         return true;
    //     } catch (error) {
    //         console.log("Something went wrong in service");
    //         throw (error);
    //     }
    // }
    // async getAirport(airportId){
    //     try {
    //         const airport = await this.airportRepository.getAirport(airportId);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in service");
    //         throw (error);
    //     }
    // }
    // async updateAirport(airportId, data){
    //     try {
    //         const airport = await this.airportRepository.updateAirport(airportId, data);
    //         return airport;
    //     } catch (error) {
    //         console.log("Something went wrong in service");
    //         throw (error);
    //     }
    // }
}

module.exports = AirportService;