require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const postRouter = require('./src/routers/post.js');
// const userRouter = require('./src/routers/user.js');
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

app.get('/', (req, res) => {
  res.send('hoia tran');
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
