var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333'
});

/* specific sheet */
flatsheet.sheet('1111bef0-4904-11e4-bca7-516af46d1e30', function (err, res){
  console.log(err, res)
});