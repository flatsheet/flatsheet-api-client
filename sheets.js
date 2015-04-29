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
* Add a row to a sheet
* @param {String} key the unique identifier of the sheet
* @param {Object} row an object that represents a row in the sheet
* @param {Function} callback a callback with error and sheet arguments
* @example
* client.addRow(function (err, sheet)) {
*
* })
*
*/
Sheets.prototype.addRow = function addRow (key, row, cb) {
  var self = this

  this.get(key, function (err, req) {
    if (err) return cb(err)
    var sheet = req
    sheet.rows.push(row)
    self.update(sheet, cb)
  })
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
