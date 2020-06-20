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

  let allElts = $('*');

  let filteredElts = allElts.filter(function(i, elt) {
    // this === elt
    return $(this).children().length > 3; 
  });

  let items = filteredElts.get();

  items.forEach(e => {
    console.log(e.name);
  });

});

const messageModule = require('./messages');
messageModule.messages.forEach( (m)=>  {
  console.log(m);
});
