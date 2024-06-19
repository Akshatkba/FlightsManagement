const { CityRepository } = require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }

    async CreateCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in city-service in service layer");
            throw (error);
        }
    }

    async DeleteCity(cityId){
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return true;
        } catch (error) {
            console.log("Something went wrong in city-service in service layer");
            throw (error);
        }
    }

    async GetCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in city-service in service layer");
            throw (error);
        }
    }

    async UpdateCity(cityId, data){
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in city-service in service layer");
            throw (error);
        }
    }
}