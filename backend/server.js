const express = require('express');

const pool = require('./db');

const app = express();

// получение всех произведений с информацией
app.get('/api/pieces', async (req, res) => {
  try {
    const result = await pool.query(`
    SELECT
        pieces.id,
        pieces.title,
        pieces.difficulty,
        pieces.status,
        CONCAT(composers.first_name, ' ', composers.last_name) AS composer
    FROM pieces
    JOIN composers
        ON pieces.composer_id = composers.id
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Ошибка при получении произведений'
    });
  }
});


app.listen(3000, () => {
    console.log('Backend запущен: http://localhost:3000');
});
