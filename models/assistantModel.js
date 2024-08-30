// models/assistantModel.js
const axios = require('axios');
require('dotenv').config(); // Ensure environment variables are loaded

const API_KEY = process.env.OPENWEATHER_API_KEY; // Use environment variable for API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherResponse = async (query) => {
  try {
    console.log('successfully called',API_KEY,query)
    const response = await axios.get(BASE_URL, {
      params: {
        q: query, // City name
        appid: API_KEY, // API Key
        units: 'metric' // Temperature in Celsius
      }
    });
    console.log('ehllo',response)
    const { weather, main } = response.data;
    return `Weather in ${query}: ${weather[0].description}, Temperature: ${main.temp}°C`;
  } catch (error) {
    console.error('Error fetching weather response:', error.message);
    throw new Error('Error fetching weather response');
  }
};

module.exports = { getWeatherResponse };
