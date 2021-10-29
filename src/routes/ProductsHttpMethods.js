const express = require('express');
const router = express.Router();
const addOrEditProduct = require('../queries/AddOrEditProduct');
const deleteProduct = require('../queries/DeleteProduct.js');
const getProduct = require('../queries/GetProduct');

// HTTP methods
// GET all products or a single product
router.get(`${process.env.API_ENDPOINT}${process.env.PRODUCTS_ENDPOINT}/:id`, (req, res) => {
    const { id } = req.params;

    getProduct(id, res);
});

// POST a product
router.post(`${process.env.API_ENDPOINT}${process.env.PRODUCTS_ENDPOINT}`, (req, res) => {
    const { id, sku, nombre, descripcion, categoria_primaria,
        categoria_secundaria, precio, stock, fecha, calificacion, ruta_imagen } = req.body;

    addOrEditProduct(
        id, sku, nombre, descripcion,
        categoria_primaria, categoria_secundaria,
        precio, stock, fecha, calificacion, ruta_imagen, res);
});

// EDIT a product
router.put(`${process.env.API_ENDPOINT}${process.env.PRODUCTS_ENDPOINT}/:id`, (req, res) => {
    const { sku, nombre, descripcion, categoria_primaria,
        categoria_secundaria, precio, stock, fecha, calificacion, ruta_imagen } = req.body;

    const { id } = req.params;

    addOrEditProduct(id, sku, nombre, descripcion,
        categoria_primaria, categoria_secundaria,
        precio, stock, fecha, calificacion, ruta_imagen, res);
});

// DELETE a product
router.delete(`${process.env.API_ENDPOINT}${process.env.PRODUCTS_ENDPOINT}/:id`, (req, res) => {
    const { id } = req.params;

    deleteProduct(id, res);
});

module.exports = router;