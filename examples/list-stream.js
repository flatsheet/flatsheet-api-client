var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

/* list of user's sheets */
var list = flatsheet.list('example');

list.pipe(process.stdout);

list.on('error', function (err) {
    console.log(err)
});