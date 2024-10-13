import express from 'express';
import { OPENWEATHER_API_KEY } from "../../../config";
import axios from 'axios'; // Import axios

const API_KEY = OPENWEATHER_API_KEY; 

export const getWeather = async (req: express.Request, res: express.Response) => {
    try {
        const city: string = req.query.city as string;

        if (!city) {
            return res.sendStatus(400); // City is required
        } 

        const geoResponse = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        );

        if (geoResponse.data.length === 0) {
            return res.status(404).json({ message: 'City not found' }); // Use 404 for not found
        }
    
        const { lat, lon } = geoResponse.data[0];

        // Then, fetch the weather data using the coordinates
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );

        return res.status(200).json(weatherResponse.data);
    } catch (error) {
        return res.status(500).json({ message: error.message || 'An error occurred' }); // Provide better error messages
    }
}