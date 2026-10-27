
const express = require('express');
const usersRouter = require('./routes/users.routes');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
  });
});

module.exports = app;
