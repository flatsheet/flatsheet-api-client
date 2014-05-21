# flatsheet-javascript-client

> API client for http://flatsheet.io

## Todos
Create, update, and destroy methods.

## Install

```
npm install --save flatsheet
```

## Example usage

```
var Flatsheet = require('flatsheet');

var flatsheet = new Flatsheet();

/* list of user's sheets */
flatsheet.list('example', function(err, res){
  console.log(err, res)
});

/* specific sheet */
flatsheet.sheet('tcuxl49owsafl-jgp5qrta', function (err, res){
  console.log(err, res);
});
```

## API

### Create flatsheet object

```
var Flatsheet = require('flatsheet');

var flatsheet = new Flatsheet({
  host: 'https://app.flatsheet.io',
  token: 'YOUR_API_KEY'
});
```

The `host` argument is optional, only use it if you aren't using the hosted version of Flatsheet.
The `token` argument is not needed for GET requests, only for PUT, POST, and DELETE requests.

### Get list of user's sheets

```
flatsheet.list('username', function(err, res){
  console.log(err, res)
});
```

### Get a specific sheet

```
flatsheet.sheet('SLUG_OF_SHEET', function (err, res){
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
flatsheet.sheet('SLUG_OF_SHEET', function (err, res) {
  res.name = 'change the name of the sheet to this';

  flatsheet.update(res, function (err, res) {
    console.log(err, res)
  });
});
```

### Add a row to a sheet

```
var row = { pizza: 'wooaaaadddddaaaaoooo' };

flatsheet.addRow('SLUG_OF_SHEET', row, function (err, res) {
  console.log(err, res);
});
```

### Destroy a sheet

```
flatsheet.destroy('SLUG_OF_SHEET', function () {
  flatsheet.sheet('SLUG_OF_SHEET', function (err, res) {
    console.log(err) /* { error: 404 } */
  });
});
```

## Tests
- Clone repository
- Run `npm install`
- Run `npm test`

Tests are currently located in the test.js file.