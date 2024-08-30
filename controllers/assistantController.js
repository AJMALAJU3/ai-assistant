// controllers/assistantController.js
const { getWeatherResponse } = require('../models/assistantModel');

const getIndex = (req, res) => {
  res.render('index', { response: '' });
};

const postQuery = async (req, res) => {
  try {
    const query = req.body.query;
    console.log('Received query:', query);
    const response = await getWeatherResponse(query);
    console.log('Received response:', response);
    res.render('index', { response });
  } catch (error) {
    console.error('Error processing the request:', error.message);
    res.status(500).send('Error processing the request');
  }
};

module.exports = { getIndex, postQuery };
