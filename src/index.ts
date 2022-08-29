import { Request, Response } from "express";

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const tourRouter = require('../src/routers/tour');
const userRouter = require('../src/routers/user');

const port = process.env.PORT || 3333;
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  });

app.get('/', (req: Request, res: Response) => {
  res.send('hoia tran');
});

app.use('/tours', tourRouter);
app.use("/user", userRouter)
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


