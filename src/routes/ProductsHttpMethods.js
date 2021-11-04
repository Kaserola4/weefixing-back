const express = require('express');
const router = express.Router();
const addOrEditProduct = require('../queries/products_queries/AddOrEditProduct');
const deleteProduct = require('../queries/products_queries/DeleteProduct');
const getProduct = require('../queries/products_queries/GetProduct');

const API_ENDPOINT = process.env.API_ENDPOINT;
const PRODUCTS_ENDPOINT = process.env.PRODUCTS_ENDPOINT; 

// HTTP methods
// GET all products or a single product
router.get(`${API_ENDPOINT}${PRODUCTS_ENDPOINT}/:id`, (req, res) => getProduct(req, res));

// POST a product
router.post(`${API_ENDPOINT}${PRODUCTS_ENDPOINT}`, (req, res) => addOrEditProduct(req, res));

// EDIT a product
router.put(`${API_ENDPOINT}${PRODUCTS_ENDPOINT}/:id`, (req, res) => addOrEditProduct(req, res));

// DELETE a product
router.delete(`${API_ENDPOINT}${PRODUCTS_ENDPOINT}/:id`, (req, res) => deleteProduct(req, res));


module.exports = router;