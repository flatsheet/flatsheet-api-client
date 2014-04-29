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

var flatsheet = new Flatsheet({
  host: 'https://app.flatsheet.io',
  token: '814c112380b711fde93c17fc16c10108'
});

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
The `token` argument is not needed for GET requests, only for PUT and POST requests.

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

## Tests
- Clone repository
- Run `npm install`
- Run `npm test`

Tests are currently located in the test.js file.