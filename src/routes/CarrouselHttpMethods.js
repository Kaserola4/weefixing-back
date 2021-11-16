const express = require('express');
const router = express.Router();
const getCarrousel = require('../queries/carrousel/GetCarrousel');
const addCarrousel = require('../queries/carrousel/AddCarrousel');
const updateCarrousel = require('../queries/carrousel/UpdateCarrousel');
const deleteCarrousel = require('../queries/carrousel/DeleteCarrousel');

const CARROUSEL_ENDPOINT = process.env.CARROUSEL_ENDPOINT;

// HTTP methods
// GET carrousel
router.get(`${CARROUSEL_ENDPOINT}/:id`, (req, res) => getCarrousel(req, res));
// POST a carrousel
router.post(`${CARROUSEL_ENDPOINT}`, (req, res) => addCarrousel(req, res));
// UPDATE a carrousel
router.put(`${CARROUSEL_ENDPOINT}/:id`, (req, res) => updateCarrousel(req, res));
// DELETE a carrousel
router.delete(`${CARROUSEL_ENDPOINT}/:id`, (req, res) => deleteCarrousel(req, res));

module.exports = router;