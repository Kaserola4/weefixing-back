require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const { validateToken } = require('./src/utilities/JwtManager');

const PORT = process.env.port || 3001;
const API_ENDPOINT = process.env.API_ENDPOINT;

// cors
app.use(cors());

// Cookie parsers
app.use(cookieParser());

// JSON
app.use(express.json());

// Login
app.use(`${API_ENDPOINT}`, require('./src/routes/LoginHttpMethods'));

// Register
app.use(`${API_ENDPOINT}`, require('./src/routes/RegisterHttpMethods'));

// Products routes
app.use(`${API_ENDPOINT}`, require('./src/routes/ProductsHttpMethods'));

// Users routes
app.use(`${API_ENDPOINT}`, require('./src/routes/UsersHttpMethods'));

// Categories routes
app.use(`${API_ENDPOINT}`, require('./src/routes/CategoriesHttpMethods'));

// Carrousel routes
app.use(`${API_ENDPOINT}`, require('./src/routes/CarrouselHttpMethods'));

// Offers routes
app.use(`${API_ENDPOINT}`, require('./src/routes/OffersHttpMethods'));

// Cart routes
app.use(`${API_ENDPOINT}`, validateToken, require('./src/routes/CartHttpMethods'));

// FIRE IT UP
app.listen(PORT, () => console.log(`Listening to http://Localhost:${PORT}`));
