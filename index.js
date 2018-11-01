'use strict';
require('dotenv').config({ path: __dirname + '/.env' });
const alfy = require('alfy');

const API_KEY = process.env.THEMOVIEDB_API_KEY;

if (!API_KEY) {
  alfy.error('Add `THEMOVIEDB_API_KEY` on the workflow settings');
  return;
}

alfy
  .fetch('api.themoviedb.org/3/search/movie', {
    query: {
      api_key: API_KEY,
      query: alfy.input,
    },
  })
  .then(data => {
    const items = data.results.map(x => {
      return {
        autocomplete: x.title,
        title: x.title,
        subtitle: '⭐ ' + x.vote_average + ' 🗓 ' + x.release_date.substr(0, 4),
        arg: 'https://themoviedb.org/movie/' + x.id,
        quicklookurl: 'https://themoviedb.org/movie/' + x.id,
      };
    });
    alfy.output(items);
  });
