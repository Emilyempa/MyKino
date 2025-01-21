import express from 'express';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5080;

app.engine('handlebars', engine({ extname: '.handlebars' }));
app.set('view engine', 'handlebars');
app.set('views', __dirname);

app.use(bodyParser.json());

const getMovies = async () => {
  try {
    const response = await axios.get('https://plankton-app-xhkom.ondigitalocean.app/api/movies');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getFooter = async () => {
  try {
    const filePath = path.join(__dirname, '../dist/data/footer.json');
    const data = fs.readFileSync(filePath, 'utf8'); //change to await fs.readFile
    const jsonData = JSON.parse(data);
    return console.log(JSON.stringify(jsonData, null, 2));
    // return jsonData; to send to handlebars
  } catch (error) {
    console.error('Error fetching data:', error);
    // return null;
  }
};

getFooter();

app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));
app.use('/data', express.static(path.join(__dirname, '../dist/data')));
app.use('/img', express.static(path.join(__dirname, '../dist/img')));

app.get('/', async (req, res) => {
  const movies = await getMovies();
  res.render('home', { movies });
});

// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, '../dist/index.html');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(404).send('An error occurred, Try again soon');
//       return;
//     }
//     res.send(data);
//   });
// });

app.get('/kids', (req, res) => {
  const filePath = path.join(__dirname, '../dist/kids.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send('An error occurred, Try again soon');
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
      res.status(404).send('An error occurred, Try again soon');
      return;
    }
    res.send(data);
  });
});

app.get('/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${movieId}`);
    const movie = response.data.data;
    if (!movie) {
      return res.status(404).send('Movie not found');
    }

    const movieSpecifics = {
      title: movie.attributes.title,
      intro: movie.attributes.intro,
      image: movie.attributes.image.url,
    };

    res.render('movie', movieSpecifics);
  } catch (error) {
    console.error('Error fetching movie:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5080, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
