## `updateRow`

Update a row in a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `row` | `Object` | an object that represents a row in the sheet |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.updateRow(key, row, function (err, row)) {

})
```


## `Flatsheet`

Flatsheet API Client

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `options` | `Object` | options for the api client |
| `options.host` | `String` | flatsheet server host |
| `options.username` | `String` | username, only needed if making POST, PUT, DELETE requests |
| `options.password` | `String` | password, only needed if making POST, PUT, DELETE requests |


### Examples

```js
var flatsheet = require('flatsheet-api-client');
var client = flatsheet();
```


## `Accounts`

Flatsheet Accounts

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `client` | `Object` |  |


### Examples

```js
var flatsheet = require('flatsheet-api-client');
var client = flatsheet();
client.accounts.list()
```


## `deleteRow`

Update a row in a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `row` | `Object` | an object that represents a row in the sheet |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.deleteRow(key, row, function (err)) {

})
```


## `Sheets`

Flatsheet Sheets

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `client` | `Object` |  |


### Examples

```js
var flatsheet = require('flatsheet-api-client');
var client = flatsheet();
client.sheets.list()
```


## `list`

Get list of sheets

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error and sheets arguments |


### Examples

```js
client.sheets.list(function (err, sheets)) {

})
```


## `create`

Create a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `the` | `Object` | sheet object |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.sheets.create(function (err, sheet)) {

})
```


## `addRow`

Add a row to a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `row` | `Object` | an object that represents a row in the sheet |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.addRow(key, row, function (err, sheet)) {

})
```


## `create`

Create an account

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error and account arguments |


### Examples

```js
client.acounts.create(function (err, account)) {

})
```


## `delete`

Delete an account

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error argument |


### Examples

```js
client.acounts.delete(function (err)) {

})
```


## `delete`

Delete a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `callback` | `Function` | a callback with error argument |


### Examples

```js
client.sheets.delete(function (err)) {

})
```


## `get`

Get sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.sheets.get(function (err, sheet)) {

})
```


## `get`

Get an account

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error and account arguments |


### Examples

```js
client.acounts.get(function (err, account)) {

})
```


## `getRow`

Get a row of a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `key` | `String` | the unique identifier of the sheet |
| `rowkey` | `String` | the unique identifier of the row |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.getRow(key, rowkey, function (err, sheet)) {

})
```


## `list`

Get list of accounts

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error and accounts arguments |


### Examples

```js
client.acounts.list(function (err, accounts)) {

})
```


## `rows`

Get rows of a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `sheet` | `Object` | the sheet object |
| `callback` | `Function` | a callback with error and rows arguments |


### Examples

```js
client.sheets.rows(function (err, rows)) {

})
```


## `update`

Update a sheet

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `sheet` | `Object` | the sheet object |
| `callback` | `Function` | a callback with error and sheet arguments |


### Examples

```js
client.sheets.update(function (err, sheet)) {

})
```


## `update`

Update an account

### Parameters

| name | type | description |
| ---- | ---- | ----------- |
| `callback` | `Function` | a callback with error and account arguments |


### Examples

```js
client.acounts.update(function (err, account)) {

})
```


