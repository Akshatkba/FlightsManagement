const express = require('express');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository')


const setupAndStartServer = async()=>{
    // create an express object
    const app = express();
    app.use(express.json())
    app.listen(3000, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();