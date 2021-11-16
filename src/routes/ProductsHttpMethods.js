const express = require('express');
const router = express.Router();
const addOrEditProduct = require('../queries/products_queries/AddOrEditProduct');
const deleteProduct = require('../queries/products_queries/DeleteProduct');
const getProduct = require('../queries/products_queries/GetProduct');
const getRelevantProduct = require('../queries/products_queries/GetRelevantProduct');

const PRODUCTS_ENDPOINT = process.env.PRODUCTS_ENDPOINT; 
const DATA_ENDPOINT = process.env.DATA_ENDPOINT;
const RELEVANT_ENDPOINT = process.env.RELEVANT_ENDPOINT;

// HTTP methods
// GET all products or a single product
router.get(`${PRODUCTS_ENDPOINT}/:id`, (req, res) => getProduct(req, res));
// GET relevant products - limited to twelve
router.get(`${DATA_ENDPOINT}${RELEVANT_ENDPOINT}${PRODUCTS_ENDPOINT}`, (req, res) => getRelevantProduct(res));

// POST a product
router.post(`${PRODUCTS_ENDPOINT}/:id`, (req, res) => addOrEditProduct(req, res));

// EDIT a product
router.put(`${PRODUCTS_ENDPOINT}/:id`, (req, res) => addOrEditProduct(req, res));

// DELETE a product
router.delete(`${PRODUCTS_ENDPOINT}/:id`, (req, res) => deleteProduct(req, res));


module.exports = router;