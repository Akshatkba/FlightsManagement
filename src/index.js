const express = require('express');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async()=>{
    // create an express object
    const app = express();
    app.use(express.json())
    app.listen(3000, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();