var Flatsheet = require('../');

var flatsheet = new Flatsheet();

/* list of user's sheets */
flatsheet.list('example', function(err, res){
  console.log(err, res)
});

/* specific sheet */
flatsheet.sheet('tcuxl49owsafl-jgp5qrta', function (err, res){
  console.log(err, res);
});