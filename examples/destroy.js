var Flatsheet = require('../');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
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
  flatsheet.destroy(res.slug, function () {
    flatsheet.sheet(res.slug, function (failErr, failRes) {
      console.log(failErr)
    });
  });
});