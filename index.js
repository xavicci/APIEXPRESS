/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const routeApi = require('./routes');
const {
  errorHandler,
  logErrors,
  boomErrorHandler,
} = require('./middlewares/errorHandler');
const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'), false);
    }
  },
};

app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express XFC jj');
});

routeApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Estoy corriendo mi server en express ' + port);
});
