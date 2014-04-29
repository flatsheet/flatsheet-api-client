var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333',
  token: '96aa062b2cc8d494aea477cd2f520c7e'
});

/* list of sheets */
flatsheet.list(function(err, res){
  console.log(err, res)
});

/* specific sheet */
flatsheet.sheet(7, function (err, res){
  console.log(err, res);
});
