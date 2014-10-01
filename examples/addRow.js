var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

var slug = '1111bef0-4904-11e4-bca7-516af46d1e30';

var row = { pizza: 'wooaaaadddddaaaaoooo' };

flatsheet.addRow(slug, row, function (err, res) {
  console.log(err, res);
});