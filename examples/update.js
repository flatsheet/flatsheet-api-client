var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333',
  username: 'test',
  password: 'pizza'
});

var slug = '1111bef0-4904-11e4-bca7-516af46d1e30';

flatsheet.sheet(slug, function (err, res) {
  res.name = 'waaaaaaa a aaaaa a a a a a a a';

  flatsheet.update(res, function (err, res) {
    console.log(err, res)
  });
});