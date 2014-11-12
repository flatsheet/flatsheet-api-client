var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333'
});

/* list of user's sheets */
var list = flatsheet.list();

list.pipe(process.stdout);

list.on('error', function (err) {
    console.log(err)
});