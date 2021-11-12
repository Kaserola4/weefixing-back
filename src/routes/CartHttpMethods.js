const express = require('express');
const router = express.Router();
const getCart = require('../queries/cart_queries/GetCart');
const deleteFromCart = require('../queries/cart_queries/DeleteFromCart');

const API_ENDPOINT = process.env.API_ENDPOINT;
const CART_ENDPOINT = process.env.CART_ENDPOINT; 

// HTTP methods
// GET a cart from ID or get all carts
router.get(`${API_ENDPOINT}${CART_ENDPOINT}/:id`, (req, res) => getCart(req, res));

// DELETE products from the cart
router.delete(`${API_ENDPOINT}${CART_ENDPOINT}`, (req, res) => deleteFromCart(req, res));


module.exports = router;