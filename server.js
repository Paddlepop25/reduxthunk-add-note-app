const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

let db = lowdb(new FileSync('db.json')); // creates db.json file

db.defaults({ notes: [] }).write(); // initial data written into db.json

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200);
  res.json({ hello: 'kitty' });
});

app.get('/getnotes', (req, res) => {
  res.status(200);
  const data = db.get('notes').value(); // get data from db.json
  return res.json(data);
});

app.post('/postnotes', (req, res) => {
  const addNotes = req.body;
  console.log('addNotes >>> ', addNotes);
  db.set('notes', addNotes).write(); // writes data into db.json
  res.json({ note_success: true });
});

app.listen(PORT, () => {
  console.log(`Application is running on ${PORT}`);
});