var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

var slug = 'uptymoquolte3haozfnapw';

flatsheet.sheet(slug, function (err, res) {
  res.name = 'waaaaaaa a aaaaa a a a a a a a';

  flatsheet.update(res, function (err, res) {
    console.log(err, res)
  });
});