const express = require('express');

const pool = require('./db');

const app = express();

app.listen(3000, () => {
    console.log('Backend запущен: http://localhost:3000');
});
