var test = require('tape');
var Flatsheet = require('./');

var flatsheet = new Flatsheet({
  token: '866bedcf83f71644f6dc39fa70b9d87d',
  host: 'http://localhost:3333'
});

test('get list of sheets', function (t) {
  t.plan(1);

  flatsheet.list(function(err, res){
    t.ok(res);
  });
});

test('get specific sheet', function (t) {
  t.plan(1);

  flatsheet.sheet('1111bef0-4904-11e4-bca7-516af46d1e30', function (err, res){
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

  var slug = '1111bef0-4904-11e4-bca7-516af46d1e30';

  flatsheet.sheet(slug, function (err, res) {
    res.name = 'new name';

    flatsheet.update(res, function (updateErr, updateRes) {
      t.equal(res.name, updateRes.name);
    });
  });
});

test('add row to sheet', function (t) {
  t.plan(1);

  var slug = '1111bef0-4904-11e4-bca7-516af46d1e30';

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
    flatsheet.destroy(res.id, function () {
      flatsheet.sheet(res.id, function (failErr, failRes) {
        t.equal(404, failErr.error);
      });
    });
  });
});