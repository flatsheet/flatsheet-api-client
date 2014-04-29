var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'https://app.flatsheet.io',
  token: '814c112380b711fde93c17fc16c10108'
});

/* list of user's sheets */
flatsheet.list('example', function(err, res){
  console.log(err, res)
});

/* specific sheet */
flatsheet.sheet('tcuxl49owsafl-jgp5qrta', function (err, res){
  console.log(err, res);
});