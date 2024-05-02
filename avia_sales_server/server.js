const express = require('express');

const app = express();
const port = 3000;
const mysql = require('mysql2');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Разрешить доступ с любых доменов
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'gasan',
  password: '',
  database: 'aviasales'
});


connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключено к базе данных MySQL');
});

// Обработка запроса на получение всех рейсов
app.get('/flights', (req, res) => {
    connection.query('SELECT * FROM flights', (err, rows) => {
        if (err) {
          console.error('Ошибка при получении рейсов:', err);
          res.status(500).json({ error: 'Ошибка при получении рейсов' });
          return;
        }
        res.json(rows);
        console.log(rows)
      });
  });

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
  });
