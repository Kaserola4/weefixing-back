const express = require('express');
const login = require('../queries/users_queries/login_register/Login');
const router = express.Router();
const LOGIN_ENDPOINT = process.env.LOGIN_ENDPOINT;

// HTTP methods
// POST login
router.post(`${LOGIN_ENDPOINT}`, (req, res) => login(req, res));

module.exports = router;