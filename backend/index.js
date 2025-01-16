import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5080;

app.use(bodyParser.json());
// app.use('/assets', express.static(path.join(__dirname, '../dist/assets/main-4swr1hn8.css')));
// app.use('/assets', express.static(path.join(__dirname, '../dist/asset/main-4swr1hn8.css')));
app.use(express.static(path.join(__dirname, '../dist/assets/main-4swr1hn8.css')));

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

// app.use(express.static(path.join(__dirname, '../dist/assets/main-4swr1hn8.css')));

// app.use("/static", express.static('../dist/assets/main-4swr1hn8.css'));

app.listen(5080, () => {
  console.log(`Server is running on port ${port}`);
});
