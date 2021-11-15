const express = require('express');
const router = express.Router();

const addOffer = require('../queries/offers_queries/AddOffer');
const deleteOffer = require('../queries/offers_queries/DeleteOffer');
const getOffer = require('../queries/offers_queries/GetOffer');
const getOfferData = require('../queries/offers_queries/GetOfferData');
const updateOffer = require('../queries/offers_queries/UpdateOffer');

const OFFERS_ENDPOINT = process.env.OFFERS_ENDPOINT;
const DATA_ENDPOINT = process.env.DATA_ENDPOINT;

// HTTP methods
// GET
// GET all offers or a single product
router.get(`${OFFERS_ENDPOINT}/:id`, (req, res) => getOffer(req, res));
// GET offer data
router.get(`${DATA_ENDPOINT}${OFFERS_ENDPOINT}`, (req, res) => getOfferData(res));

// POST a offer
router.post(`${OFFERS_ENDPOINT}`, (req, res) => addOffer(req, res));

// EDIT a offer
router.put(`${OFFERS_ENDPOINT}/:id`, (req, res) => updateOffer(req, res));

// DELETE a offer
router.delete(`${OFFERS_ENDPOINT}/:id`, (req, res) => deleteOffer(req, res));


module.exports = router;