const express = require('express');
const addUser = require('../queries/users_queries/login_register/RegisterUser');
const router = express.Router();
const REGISTER_ENDPOINT = process.env.REGISTER_ENDPOINT;

// HTTP methods
// POST login
router.post(`${REGISTER_ENDPOINT}`, (req, res) => addUser(req, res));

module.exports = router;