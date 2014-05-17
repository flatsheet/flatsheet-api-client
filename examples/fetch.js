var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

/* specific sheet */
flatsheet.sheet('5rdstpngj8hmlr0kfpzmyg', function (err, res){
  console.log(err, res)
});