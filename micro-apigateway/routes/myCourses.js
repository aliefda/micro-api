const express = require('express');
const router = express.Router();

const myCoursesHandler = require('./handler/my-courses');

//const verifyToken = require('../middlewares/verifyToken');

router.post('/', myCoursesHandler.create);
router.get('/', myCoursesHandler.get);

module.exports = router;
