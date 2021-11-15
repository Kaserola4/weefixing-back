const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.port || 3001;
const API_ENDPOINT = process.env.API_ENDPOINT;

// cors
app.use(cors());

// JSON
app.use(express.json());

// Routes
// Products routes
app.use(`${API_ENDPOINT}`, require('./src/routes/ProductsHttpMethods'));

// Users routes
app.use(`${API_ENDPOINT}`, require('./src/routes/UsersHttpMethods'));

// Cart routes
app.use(`${API_ENDPOINT}`, require('./src/routes/CartHttpMethods'));

// Categories routes
app.use(`${API_ENDPOINT}`, require('./src/routes/CategoriesHttpMethods'));

// Offers routes
app.use(`${API_ENDPOINT}`, require('./src/routes/OffersHttpMethods'));

// FIRE IT UP
app.listen(PORT, () => console.log(`Listening to http://Localhost:${PORT}`));
