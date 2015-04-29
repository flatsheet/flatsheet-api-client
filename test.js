var test = require('tape')

var flatsheet = require('./')({
  host: 'http://localhost:3333',
  username: 'test',
  password: 'pizza'
})

var sheet = {
  name: 'pizza sheet!',
  description: 'womp womp womp',
  rows: [
    {
      pizza: 'rename this column to get started!'
    }
  ]
}

test('get list of sheets', function (t) {
  flatsheet.sheets.list(function (err, res) {
    t.notOk(err)
    t.ok(res)
    t.end()
  })
})

test('get specific sheet', function (t) {
  flatsheet.sheets.list(function (err, res) {
    t.notOk(err)

    flatsheet.sheets.get(res[0].key, function (err, res) {
      t.notOk(err)
      t.ok(res)
      t.end()
    })
  })
})

test('create sheet', function (t) {
  flatsheet.sheets.create(sheet, function (err, res) {
    console.log(res)
    t.notOk(err)
    t.ok(res)
    t.end()
  })
})

test('update sheet metadata', function (t) {
  flatsheet.sheets.create(sheet, function (err, res) {
    t.notOk(err)
    res.name = 'new name'
    flatsheet.sheets.update(res, function (updateErr, updateRes) {
      t.equal(res.name, updateRes.name)
      t.end()
    })
  })
})

test('add row to sheet', function (t) {
  flatsheet.sheets.create(sheet, function (err, res) {
    t.notOk(err)
    var row = { pizza: 'wooaaaadddddaaaaoooo' }

    flatsheet.sheets.addRow(res.key, row, function (err, res) {
      t.notOk(err)
      t.ok(res)
      t.end()
    })
  })
})

test('delete sheet', function (t) {
  flatsheet.sheets.create(sheet, function (err, res) {
    t.notOk(err)

    flatsheet.sheets.delete(res.key, function (err) {
      t.notOk(err)

      flatsheet.sheets.get(res.key, function (err, res) {
        t.ok(err)
        t.equal(404, err.error)
        t.end()
      })
    })
  })
})
