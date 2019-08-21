require('./config')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

const morgan = require('morgan');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({origin: 'http://test.albo.mx'}));

// Settings
const port = process.env.PORT;

// Routes
app.use('/api', require('./routes/v1'));

// Db connection
// Db connection
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;

    console.log('Online database');
});

// Starting the server
app.listen(port, () => console.log(`restserver listen on port ${port}`));