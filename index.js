const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.port || 3001;

// JSon visualizer
app.use(express.json());

// Routes
// Products routes
app.use(require('./src/routes/ProductsHttpMethods'));

// Users routes
app.use(require('./src/routes/UsersHttpMethods'));

// Categories routes
app.use(require('./src/routes/CategoriesHttpMethods'));
// FIRE IT UP
app.listen(PORT, () => {
    console.log(`Listening to http://Localhost:${PORT}`);
});
