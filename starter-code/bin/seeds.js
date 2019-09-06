const mongoose = require('mongoose');
const Celebrity = require('./../models/Celebrity');

const celebrities = [
  {
    name: 'Woody',
    occupation: 'Sherift',
    catchPhrase: 'Alguien enveneno el abrevadero'
  },
  {
    name: 'Mario',
    occupation: 'Plumber',
    catchPhrase: 'Mamma mia!'
  },
  {
    name: 'Pikachu',
    occupation: 'unknown',
    catchPhrase: 'Pika Pika'
  }
];

mongoose
  .connect('mongodb://localhost/celebrities', { useNewUrlParser: true })
  .then(async () => {
    const celebritiesCreated = await Celebrity.create(celebrities);
    console.log(`${celebrities.length} celebrities were created`);
    mongoose.connection.close();
  })
  .catch(e => console.log(e));
