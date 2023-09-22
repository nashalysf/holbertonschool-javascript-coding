#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (err, respose, body) => {
  if (err) {
    console.log(err);
  } else {
    const films = JSON.parse(body).results;
    let count = 0;

    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes('18')) {
          count++;
        }
      }
    }
    console.log(ct);
  }
});
