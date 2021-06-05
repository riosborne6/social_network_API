const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const redText = '\x1b[31m%s\x1b[0m';

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_ENDPOINT =
  process.env.MONGODB_ENDPOINT ||
  console.log(redText, 'You must have a Mongo Database endpoint.');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(MONGODB_ENDPOINT, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);
mongoose.connection.on('error', (err) =>
  console.log(`Mongoose default connection error: ${err}`)
);

app.use(routes);



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

