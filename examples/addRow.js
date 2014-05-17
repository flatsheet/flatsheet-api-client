var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

var slug = 'uptymoquolte3haozfnapw';

var row = { pizza: 'wooaaaadddddaaaaoooo' };

flatsheet.addRow(slug, row, function (err, res) {
  console.log(err, res);
});