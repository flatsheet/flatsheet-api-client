# flatsheet-api-client

> JavaScript API client for http://flatsheet.io

## Todos
Create, update, and destroy methods.

## Install

```
npm install --save flatsheet-api-client
```

## Example usage

```
var Flatsheet = require('flatsheet-api-client');

var flatsheet = new Flatsheet();

/* list of sheets */
flatsheet.list(function(err, res){
  console.log(err, res)
});

/* specific sheet */
flatsheet.sheet(sheetID, function (err, res){
  console.log(err, res);
});
```

## API

### Create flatsheet object

```
var Flatsheet = require('flatsheet-api-client');

var flatsheet = new Flatsheet({
  host: 'https://app.flatsheet.io',
  token: 'YOUR_API_KEY'
});
```

The `host` argument is optional, only use it if you aren't using the hosted version of Flatsheet.
The `token` argument is not needed for GET requests, only for PUT, POST, and DELETE requests.

### Get list of sheets

```
flatsheet.list(function(err, res){
  console.log(err, res)
});
```

### Get a specific sheet

```
flatsheet.sheet(sheetID, function (err, res){
  console.log(err, res);
});
```

### Create a sheet

```
/* Set sheet properties */
var sheet = {
  name: 'pizza sheet!',
  description: 'womp womp womp',
  rows: [
    {
      pizza: 'pizza is really awesome!'
    }
  ],
}

/* create a new sheet */
flatsheet.create(sheet, function(err, res){
  console.log(err, res)
});
```

### Update a sheet

```
flatsheet.sheet(sheetID, function (err, res) {
  res.name = 'change the name of the sheet to this';

  flatsheet.update(res, function (err, res) {
    console.log(err, res)
  });
});
```

### Add a row to a sheet

```
var row = { pizza: 'wooaaaadddddaaaaoooo' };

flatsheet.addRow(sheetID, row, function (err, res) {
  console.log(err, res);
});
```

### Destroy a sheet

```
flatsheet.destroy(sheetID, function () {
  flatsheet.sheet(sheetID, function (err, res) {
    console.log(err) /* { error: 404 } */
  });
});
```

## Tests
- Clone repository
- Run `npm install`
- Run `npm test`

Tests are currently located in the test.js file.
