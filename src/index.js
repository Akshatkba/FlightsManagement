const express = require('express');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const setupAndStartServer = async()=>{
    // create an express object
    const app = express();
    app.use(express.json());
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();