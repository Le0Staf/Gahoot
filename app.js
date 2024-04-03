const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({ origin: true}));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Quiz Database

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

app.get('/', (req, res) => {
    res.sendFile('public/index.html' , { root : __dirname});
})

app.post('/send', (req, res) => {
    db.serialize(() => {
      db.run('INSERT INTO quiz(title, question1, answer1, q1a1, q1a2, q1a3, q1a4) VALUES(?, ?, ?, ?, ?, ?, ?)', [`${req.body["title"]}`, `${req.body["question1"]}`, `${req.body["answer1"]}`, `${req.body["q1a1"]}`, `${req.body["q1a2"]}`, `${req.body["q1a3"]}`, `${req.body["q1a4"]}`]); 
    });
    res.send('200');
})

app.get('/text', (req, res) => {
    messages = [];
    db.serialize(() => {
      db.all(`SELECT * FROM quiz`, (err, row) => {
        if (err) {
          console.error(err.title);
          console.error(err.question1);
          console.error(err.answer1);
          console.error(err.q1a1);
          console.error(err.q1a2);
          console.error(err.q1a3);
          console.error(err.q1a4);
        }
        row.forEach((row) => {
          temp = []
          temp.push(row.title)
          temp.push(row.question1)
          temp.push(row.answer1)
          temp.push(row.q1a1)
          temp.push(row.q1a2)
          temp.push(row.q1a3)
          temp.push(row.q1a4)
          messages.push(temp)
        });
        res.send(messages)
        });
    });  
})

//Game Database

let db2 = new sqlite3.Database('./game.db', (err) => {
  if (err) {
    console.error(err.message);
   }
  console.log('Connected to the database2.');
});

app.post('/send2', (req, res) => {
  db2.serialize(() => {
    db2.run('INSERT INTO game(quizId, p1, p1Score) VALUES(?, ?, ?)', [`${req.body["quizId"]}`, `${req.body["p1"]}`, `${req.body["p1Score"]}`]); 
  });
  res.send('200');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })