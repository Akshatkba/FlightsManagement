const { City } = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {     
            console.log("something went wrong in createCity function inside city-repository")       
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in deleteCity function inside city-repository")       
            throw {error};
        }
    }:

    async updateCity(cityId, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
            return true;

            return true;
        } catch (error) {
            
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in getcity function inside city-repository")       
            throw {error};
        }
    }
}

module.exports = CityRepository