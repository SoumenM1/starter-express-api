const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.searchByName);
router.get('/users/sort', userController.sortByAge);
router.get('/users/page', userController.paginateUsers);

module.exports = router;
