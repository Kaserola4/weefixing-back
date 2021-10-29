const express = require('express');
const app = express();
const PORT = process.env.port || 3001;
require('dotenv').config()

app.use(express.json());

// Routes
app.use(require('./src/routes/ProductsHttpMethods'));

// FIRE IT UP
app.listen(PORT, () => {
    console.log(`Listening to http://Localhost:${PORT}`);
});
