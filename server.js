// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getIndex, postQuery } = require('./controllers/assistantController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', getIndex);
app.post('/query', postQuery);

// Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
