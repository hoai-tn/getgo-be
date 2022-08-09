const mongoose = require('mongoose');
const Tour = require('../models/tour');

const getTour = async (req, res) => {
  try {
    const getTour = await Tour.find();
    console.log(getTour);
    res.status(200).json({
      data: getTour,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.export = {
  getTour,
};
