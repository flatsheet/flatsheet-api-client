module.exports = Sheets

/**
 * Flatsheet Sheets
 * @class Sheets
 * @param {Object} client
 * @example
 * var flatsheet = require('flatsheet-api-client');
 * var client = flatsheet();
 * client.sheets.list()
 */
function Sheets (client) {
  if (!(this instanceof Sheets)) return new Sheets(client)
  this.client = client
}

/**
* Get sheet
* @param {String} key the unique identifier of the sheet
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.sheets.get(function (err, sheet)) {
*
* })
*/
Sheets.prototype.get = function (key, cb) {
  return this.client.request('get', 'sheets/' + key, null, cb)
}

/**
* Get list of sheets
* @param {Function} callback a callback with error and sheets arguments
* @example
* client.sheets.list(function (err, sheets)) {
*
* })
*/
Sheets.prototype.list = function (opts, cb) {
  return this.client.request('get', 'sheets', opts, cb)
}

/**
* Create a sheet
* @param {Object} the sheet object
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.sheets.create(function (err, sheet)) {
*
* })
*/
Sheets.prototype.create = function (sheet, cb) {
  return this.client.request('post', 'sheets', sheet, cb)
}

/**
* Update a sheet
* @param {Object} sheet the sheet object
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.sheets.update(function (err, sheet)) {
*
* })
*/
Sheets.prototype.update = function (sheet, cb) {
  return this.client.request('put', 'sheets/' + sheet.key, sheet, cb)
}

/**
* Delete a sheet
* @param {String} key the unique identifier of the sheet
* @param {Function} callback a callback with error argument
* @example
* client.sheets.delete(function (err)) {
*
* })
*/
Sheets.prototype.delete = function (key, cb) {
  return this.client.request('delete', 'sheets/' + key, null, cb)
}

/**
* Get rows of a sheet
* @param {Object} sheet the sheet object
* @param {Function} callback a callback with error and rows arguments
* @example
* client.sheets.rows(function (err, rows)) {
*
* })
*/
Sheets.prototype.rows = function (key, opts, cb) {
  if (typeof opts === 'function') {
    var cb = opts
    opts = {}
  }
  return this.client.request('get', 'sheets/' + key + '/rows', opts, cb)
}

/**
* Add a row to a sheet
* @param {String} key the unique identifier of the sheet
* @param {Object} row an object that represents a row in the sheet
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.addRow(key, row, function (err, sheet)) {
*
* })
*
*/
Sheets.prototype.addRow = function addRow (key, row, cb) {
  return this.client.request('post', 'sheets/' + key + '/rows', row, cb)
}

/**
* Get a row of a sheet
* @param {String} key the unique identifier of the sheet
* @param {String} rowkey the unique identifier of the row
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.getRow(key, rowkey, function (err, sheet)) {
*
* })
*
*/
Sheets.prototype.getRow = function getRow (key, rowkey, cb) {
  if (typeof key === 'object') key = key.key
  return this.client.request('get', 'sheets/' + key + '/rows/' + rowkey, null, cb)
}

/**
* Update a row in a sheet
* @param {String} key the unique identifier of the sheet
* @param {Object} row an object that represents a row in the sheet
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.updateRow(function (err, sheet)) {
*
* })
*
*/
Sheets.prototype.updateRow = function updateRow (key, row, cb) {
  if (typeof key === 'object') key = key.key
  return this.client.request('put', 'sheets/' + key + '/rows/' + row.key, row, cb)
}

/**
* Update a row in a sheet
* @param {String} key the unique identifier of the sheet
* @param {Object} row an object that represents a row in the sheet
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.updateRow(function (err, sheet)) {
*
* })
*
*/
Sheets.prototype.deleteRow = function deleteRow (key, row, cb) {
  if (typeof key === 'object') key = key.key
  if (typeof row === 'string') row = { key: row }
  return this.client.request('delete', 'sheets/' + key + '/rows/' + row.key, row, cb)
}