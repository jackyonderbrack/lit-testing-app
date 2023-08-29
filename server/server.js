const express = require('express');
const cors = require('cors');
const matchesData = require('./matches.json'); // Import danych

const app = express();
const port = 8001;

app.use(cors());

app.get('/matches', (req, res) => {
  res.json(matchesData); // Zwróć dane o meczach z zaimportowanego pliku
});

app.get('/matches/:match_id', (req, res) => {
  const matchId = parseInt(req.params.match_id);
  const match = matchesData.find(match => match.match_id === matchId);

  if (match) {
    res.json(match);
  } else {
    res.status(404).json({ message: "Mecz o podanym ID nie został znaleziony." });
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
