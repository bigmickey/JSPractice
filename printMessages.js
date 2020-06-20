let request = require('request');
let cheerio = require('cheerio');

request({
  method: 'GET',
  url: 'https://cryptowat.ch/'
}, (err, res, body) => {
  if (err) return console.error(err);

let $ = cheerio.load(body);

let title = $('title');

console.log(title.text());
});

const messageModule = require('./messages');
messageModule.messages.forEach( (m)=>  {
  console.log(m);
});
