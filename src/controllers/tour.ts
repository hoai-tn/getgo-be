import { Request, Response } from 'express';
import { ITour, TourTemplate } from "../models/tourdata"
const mongoose = require('mongoose');
const Tour = require('../models/tour');

const getTour = async (req: Request, res: Response) => {
  try {
    const getTour = await Tour.find();
    res.status(200).json({
      data: getTour,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(404).json({ message: error.message });
  }
};
const createTour = async (req: Request, res: Response) => {
  // const tours: Array<ITour> = [];
  // for (let index = 0; index < 5; index++) {
  //   tours.push(TourTemplate())
  // }
  try {
    const {
      title,
      typeTour,
      price,
      arrivePlace,
      returnPlace,
      startDate,
    }: ITour = req.body
    const result = await Tour.create({
      title,
      typeTour,
      price,
      arrivePlace,
      returnPlace,
      startDate,
    });
    res.status(200).json({ data: result })
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "something went wrong" });
  }
}
module.exports = {
  getTour,
  createTour
};
