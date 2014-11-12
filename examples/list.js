var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333',
  username: 'sbt',
  password: 'sodasoda'
});

/* list of user's sheets */
flatsheet.list(function(err, res){
  console.log(err, res)
});