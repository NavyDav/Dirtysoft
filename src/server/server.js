// Exemple dans server.js
const db = require('./server/db'); // ajustez le chemin d'accès en conséquence

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route GET pour récupérer des données depuis la base de données
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM table', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Route POST pour ajouter des données à la base de données
app.post('/api/data', (req, res) => {
  const newData = req.body;
  db.query('INSERT INTO table SET ?', newData, (err, results) => {
    if (err) throw err;
    res.json({ message: 'Données ajoutées avec succès', results });
  });
});

// Ajoutez d'autres routes pour les opérations CRUD (PUT, DELETE) selon les besoins

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
