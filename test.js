var test = require('tape');
var Flatsheet = require('./');

var flatsheet = new Flatsheet();

test('get list of sheets', function (t) {
  t.plan(1);

  flatsheet.list('example', function(err, res){
    t.ok(res);
  });
});

test('get specific sheet', function (t) {
  t.plan(1);

  flatsheet.sheet('tcuxl49owsafl-jgp5qrta', function (err, res){
    t.ok(res);
  });
});