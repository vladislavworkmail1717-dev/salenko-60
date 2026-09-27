// routes/index.js
// Центральний файл, що збирає всі маршрути докупи

const express = require('express');
const router = express.Router();

const rootController = require('../controllers/rootController');
const usersRoutes = require('./usersRoutes');
const articlesRoutes = require('./articlesRoutes');

// /
router.get('/', rootController.getRoot);

// /users, /users/:userId
router.use('/users', usersRoutes);

// /articles, /articles/:articleId
router.use('/articles', articlesRoutes);

module.exports = router;
