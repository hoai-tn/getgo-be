const express = require('express');

const router = express.Router();
const { getTour } = require('../controllers/tour');

router.get('/', getTour);

module.exports = router;
