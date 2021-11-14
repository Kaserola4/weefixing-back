const express = require('express');
const router = express.Router();

const addOffer = require('../queries/offers_queries/AddOffer');
const deleteOffer = require('../queries/offers_queries/DeleteOffer');
const getOffer = require('../queries/offers_queries/GetOffer');
const updateOffer = require('../queries/offers_queries/UpdateOffer');

const OFFERS_ENDPOINT = process.env.OFFERS_ENDPOINT;

// HTTP methods
// GET all products or a single product
router.get(`${OFFERS_ENDPOINT}/:id`, (req, res) => getOffer(req, res));

// POST a product
router.post(`${OFFERS_ENDPOINT}`, (req, res) => addOffer(req, res));

// EDIT a product
router.put(`${OFFERS_ENDPOINT}/:id`, (req, res) => updateOffer(req, res));

// DELETE a product
router.delete(`${OFFERS_ENDPOINT}/:id`, (req, res) => deleteOffer(req, res));


module.exports = router;