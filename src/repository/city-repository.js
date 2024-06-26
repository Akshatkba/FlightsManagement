const  { Op } = require('sequelize') 
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

    async createCities(data){
        try {
            const city = await City.bulkCreate(data);
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
    }

    async updateCity(cityId, data){
        try {
            // the below approach also works but won'r return updated object
            // if we are using PGsql then returning true can be useful
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            // for getting updated data in mysql below approach is used
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in updateCity function inside city-repository")       
            throw {error};
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

    async getAllCities(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("something went wrong in getAllcities function in city-repo");
        }
    }
}

module.exports = CityRepository