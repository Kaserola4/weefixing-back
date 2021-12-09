const express = require('express');
const router = express.Router();
const getUser = require('../queries/users_queries/GetUser');
const addUser = require('../queries/users_queries/AddUser');
const updateUser = require('../queries/users_queries/UpdateUser');
const deleteUser = require('../queries/users_queries/DeleteUser');

const USERS_ENDPOINT = process.env.USERS_ENDPOINT; 

// HTTP methods
// GET all Users or a single user
router.get(`${USERS_ENDPOINT}/:id`, (req, res) => getUser(req, res));

// POST a User
router.post(`${USERS_ENDPOINT}`, (req, res) => addUser(req, res));

// EDIT a User
router.put(`${USERS_ENDPOINT}/:id`, (req, res) => updateUser(req, res));

// DELETE a User
router.delete(`${USERS_ENDPOINT}/:id`, (req, res) => deleteUser(req, res));

module.exports = router;