const express = require('express');
const app = express();
const tasks = require('./route/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const cors =  require('cors')
const logger = require('morgan')
const {notFound} = require('./middleware/notfound')


// middleware

app.use(express.static('./public'));
app.use(express.json());
app.use(logger('tiny'))

app.use(cors())
// routes

app.use('/api/v1/tasks', tasks);
app.use(notFound)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();