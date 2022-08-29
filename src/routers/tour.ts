import { Request, Response } from "express";

const express = require('express');

const router = express.Router();
const { getTour, createTour } = require('../controllers/tour');

router.get('/', getTour);
router.post('/create', createTour);
module.exports = router;
