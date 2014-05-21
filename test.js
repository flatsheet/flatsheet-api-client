var test = require('tape');
var Flatsheet = require('./');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

test('get list of sheets', function (t) {
  t.plan(1);

  flatsheet.list('example', function(err, res){
    t.ok(res);
  });
});

test('get specific sheet', function (t) {
  t.plan(1);

  flatsheet.sheet('5rdstpngj8hmlr0kfpzmyg', function (err, res){
    t.ok(res);
  });
});

test('create sheet', function (t) {
  t.plan(1);

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
    t.ok(res);
  });
});

test('update sheet', function (t) {
  t.plan(1);

  var slug = 'uptymoquolte3haozfnapw';

  flatsheet.sheet(slug, function (err, res) {
    res.name = 'new name';

    flatsheet.update(res, function (updateErr, updateRes) {
      t.equal(res.name, updateRes.name);
    });
  });
});

test('add row to sheet', function (t) {
  t.plan(1);

  var slug = 'uptymoquolte3haozfnapw';

  var row = { pizza: 'wooaaaadddddaaaaoooo' };

  flatsheet.addRow(slug, row, function (err, res) {
    t.ok(res);
  });
});

test('destroy sheet', function (t) {
  t.plan(1);

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
        t.equal(404, failErr.error);
      });
    });
  });
});

test('parse the slug of a sheet url', function(t) {
  t.plan(3);

  var expected = 'iq5jypw-c7vedyf9udjo-q';

  t.equal(expected, flatsheet.parseSlug('iq5jypw-c7vedyf9udjo-q'));
  t.equal(expected, flatsheet.parseSlug('https://app.flatsheet.io/api/v1/sheets/iq5jypw-c7vedyf9udjo-q'));
  t.equal(expected, flatsheet.parseSlug('https://app.flatsheet.io/sheet/iq5jypw-c7vedyf9udjo-q'));
});