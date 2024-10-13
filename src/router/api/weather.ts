import express from 'express';

import { getWeather } from '../../controller/api/weather';

export default (router: express.Router) => {
    router.get('/getWeather', getWeather);
}

