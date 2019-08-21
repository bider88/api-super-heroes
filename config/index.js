// Port
process.env.PORT = process.env.PORT || 3000;

// Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Database
const urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/superheroes' : process.env.MONGO_URI;

process.env.URLDB = urlDB;

process.env.API_KEY = '50f64c7447802307b0e5f7b2ffe3f378';

process.env.SECRET_KEY = require('./secret-key');

process.env.MARVEL_API = 'http://gateway.marvel.com/v1/public';
