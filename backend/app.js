const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./DB/connection'); // Ensure this connects to your DB

const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
