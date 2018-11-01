'use strict';
require('dotenv').config({ path: __dirname + '/.env' });

import test from 'ava';
import alfyTest from 'alfy-test';

const API_KEY = process.env.THEMOVIEDB_API_KEY;

test(async t => {
  const alfy = alfyTest();

  const result = await alfy('Venom');

  t.deepEqual(result[0], {
    autocomplete: 'Venom',
    title: 'Venom',
    subtitle: '⭐ 6.6 🗓 2018',
    arg: 'https://themoviedb.org/movie/335983',
    quicklookurl: 'https://themoviedb.org/movie/335983',
  });
});
