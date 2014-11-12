var test = require('tape');
var Flatsheet = require('./');

var flatsheet = new Flatsheet({
  host: 'http://localhost:3333',
  username: 'test',
  password: 'pizza'
});

var sheet = {
  name: 'pizza sheet!',
  description: 'womp womp womp',
  rows: [
    {
      pizza: 'rename this column to get started!'
    }
  ],
}

test('get list of sheets', function (t) {
  t.plan(1);

  flatsheet.list(function(err, res){
    t.ok(res);
  });
});

test('get specific sheet', function (t) {
  t.plan(1);
  
  flatsheet.list(function(err, res){
    flatsheet.sheet(res[0].id, function (err, res){
      t.ok(res);
    });
  });
});

test('create sheet', function (t) {
  t.plan(1);

  /* create a new sheet */
  flatsheet.create(sheet, function(err, res){
    t.ok(res);
  });
});

test('update sheet', function (t) {
  t.plan(1);

  flatsheet.create(sheet, function (err, res) {
    res.name = 'new name';
    
    flatsheet.update(res, function (updateErr, updateRes) {
      t.equal(res.name, updateRes.name);
    });
  });
});

test('add row to sheet', function (t) {
  t.plan(1);

  flatsheet.create(sheet, function (err, res) {
    var row = { pizza: 'wooaaaadddddaaaaoooo' };

    flatsheet.addRow(res.id, row, function (err, res) {
      t.ok(res);
    });
  });

  
});

test('destroy sheet', function (t) {
  t.plan(1);

  /* Set sheet properties */
  

  flatsheet.create(sheet, function (err, res) {
    flatsheet.destroy(res.id, function () {
      flatsheet.sheet(res.id, function (failErr, failRes) {
        t.equal(404, failErr.error);
      });
    });
  });
});