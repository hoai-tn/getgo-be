// const mongoose = require('mongoose');
import { Schema, model } from "mongoose";
const tourSchema = new Schema({
  title: String,
  typeTour: Number,
  price: Number,
  arrivePlace: String,
  returnPlace: String,
  startDate: String,
  rate: Number,
  careList: {
    type: [String],
    default: [],
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = model('Tours', tourSchema);
