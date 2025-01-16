import express from 'express';
import bodyParser from 'body-parser';
// import { engine } from 'express-handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5080;

// app.engine('handlebars', engine({ extname: '.handlebars' }));
// app.set('view engine', 'handlebars');
// app.set('views', __dirname);

app.use(bodyParser.json());

app.use('/assets', (req, res, next) => {
  if (req.path.endsWith('.css')) {
    express.static(path.join(__dirname, '../dist/assets'))(req, res, next);
  } else {
    res.status(404).send('Not Found');
  }
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../dist/index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred, Try again soon');
      return;
    }
    res.send(data);
  });
});

app.get('/kids', (req, res) => {
  const filePath = path.join(__dirname, '../dist/kids.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred, Try again soon');
      return;
    }
    res.send(data);
  });
});

app.get('/about', (req, res) => {
  const filePath = path.join(__dirname, '../dist/about.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred, Try again soon');
      return;
    }
    res.send(data);
  });
});

app.get('/:id', (req, res) => {
  const filePath = path.join(__dirname, '../dist/about.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred, Try again soon');
      return;
    }
    res.send(data);
  });
});

app.listen(5080, () => {
  console.log(`Server is running on port ${port}`);
});
