const express = require('express');
const router = express.Router();
const addPrimaryCategory = require('../queries/categories_queries/primary_category/AddPrimaryCategory');
const getPrimaryCategory = require('../queries/categories_queries/primary_category/GetPrimaryCategory');
const updatePrimaryCategory = require('../queries/categories_queries/primary_category/UpdatePrimaryCategory');
const addSecondaryCategory = require('../queries/categories_queries/secondary_category/AddSecondaryCategory');
const getSecondaryCategory = require('../queries/categories_queries/secondary_category/GetSecondaryCategory');
const updateSecondaryCategory = require('../queries/categories_queries/secondary_category/UpdateSecondaryCategory');

const CATEGORIES_ENDPOINT_PRIMARY = process.env.CATEGORIES_ENDPOINT_PRIMARY;
const CATEGORIES_ENDPOINT_SECONDARY = process.env.CATEGORIES_ENDPOINT_SECONDARY;

// HTTP methods

// GET all categories or a single category
router.get(`${CATEGORIES_ENDPOINT_PRIMARY}/:id`, (req, res) => getPrimaryCategory(req, res));
// POST a category
router.post(`${CATEGORIES_ENDPOINT_PRIMARY}`, (req, res) => addPrimaryCategory(req, res));
// EDIT a category
router.put(`${CATEGORIES_ENDPOINT_PRIMARY}/:id`, (req, res) => updatePrimaryCategory(req, res));

// ----- Secondary category ------ 
// GET all categories or a single category
router.get(`${CATEGORIES_ENDPOINT_SECONDARY}/:id`, (req, res) => getSecondaryCategory(req, res));
// POST a category
router.post(`${CATEGORIES_ENDPOINT_SECONDARY}`, (req, res) => addSecondaryCategory(req, res));
// EDIT a category
router.put(`${CATEGORIES_ENDPOINT_SECONDARY}/:id`, (req, res) => updateSecondaryCategory(req, res));

module.exports = router;