var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333',
  username: 'test',
  password: 'pizza'
});

/* Set sheet properties */
var sheet = {
  name: 'pizza sheet!',
  description: 'womp womp womp',
  rows: [
    {
      pizza: 'rename this column to get started!'
    }
  ],
}

flatsheet.create(sheet, function (err, res) {
  console.log(res)
  flatsheet.destroy(res.id, function (dErr, dRes) {
    console.log(dErr, dRes)
    flatsheet.sheet(res.id, function (failErr, failRes) {
      console.log(failErr)
    });
  });
});