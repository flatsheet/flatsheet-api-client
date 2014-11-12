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

/* create a new sheet */
flatsheet.create(sheet, function(err, res){
  console.log(err, res)
});