import express from 'express';
import bodyParser from 'body-parser';
import {PORT} from './config/serverConfig.js'
import connect from './config/database.js';
import apiRoutes from './routes/index.js'
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js'

const app = express();


const setUpAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(passport.initialize());
    passportAuth(passport);
    app.use('/api' , apiRoutes)
    app.listen(PORT, async()=>{
        console.log('app is listening on the port ', PORT);
        await connect();
        console.log('Mongo Db connected');

    })
}

setUpAndStartServer();