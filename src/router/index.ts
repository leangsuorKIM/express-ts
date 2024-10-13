import express from 'express';
import dotenv from 'dotenv';

import authentication from './authentication';
import users from './users'
import weather from './api/weather';

const router = express.Router();

export default (): express.Router => {
    authentication(router);
    users(router);
    weather(router);
    
    return router;
}