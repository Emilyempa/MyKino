// import express from 'express';
// import bodyParser from 'body-parser';
// import { engine } from 'express-handlebars';
// import axios from 'axios';
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { getMovies } from './movies.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const port = 5080;

// app.engine('handlebars', engine({ extname: '.handlebars' }));
// app.set('view engine', 'handlebars');
// app.set('views', __dirname);

// app.use(bodyParser.json());

// // app.use('/assets', (req, res, next) => {
// //   if (req.path.endsWith('.css')) {
// //     express.static(path.join(__dirname, '../dist/assets'))(req, res, next);
// //   } else {
// //     res.status(404).send('Not Found');
// //   }
// // });
// // getMovies();

// app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));
// app.use('/data', express.static(path.join(__dirname, '../dist/data')));
// app.use('/img', express.static(path.join(__dirname, '../dist/img')));

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

// app.get('/kids', (req, res) => {
//   const filePath = path.join(__dirname, '../dist/kids.html');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(404).send('An error occurred, Try again soon');
//       return;
//     }
//     res.send(data);
//   });
// });

// app.get('/about', (req, res) => {
//   const filePath = path.join(__dirname, '../dist/about.html');
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(404).send('An error occurred, Try again soon');
//       return;
//     }
//     res.send(data);
//   });
// });

// app.get('/:id', async (req, res) => {
//   try {
//     const movieId = req.params.id;
//     const response = await axios.get(`https://plankton-app-xhkom.ondigitalocean.app/api/movies/${movieId}`);
//     const movie = response.data.data;
//     if (!movie) {
//       return res.status(404).send('Movie not found');
//     }

//     const movieSpecifics = {
//       title: movie.attributes.title,
//       intro: movie.attributes.intro,
//       image: movie.attributes.image.url,
//     };

//     res.render('movie', movieSpecifics);
//   } catch (error) {
//     console.error('Error fetching movie:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// export default app;
