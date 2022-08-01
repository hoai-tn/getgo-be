const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  idTour: String,
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
