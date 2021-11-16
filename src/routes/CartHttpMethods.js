const express = require('express');
const router = express.Router();
const getCart = require('../queries/cart_queries/GetCart');
const deleteFromCart = require('../queries/cart_queries/DeleteFromCart');

const CART_ENDPOINT = process.env.CART_ENDPOINT; 

// HTTP methods
// GET a cart from ID or get all carts
router.get(`${CART_ENDPOINT}/:id`, (req, res) => getCart(req, res));

// DELETE products from the cart
router.delete(`${CART_ENDPOINT}`, (req, res) => deleteFromCart(req, res));


module.exports = router;