module.exports = Accounts

/**
 * Flatsheet Accounts
 * @class Accounts
 * @param {Object} client
 * @example
 * var flatsheet = require('flatsheet-api-client');
 * var client = flatsheet();
 * client.accounts.list()
 */
function Accounts (client) {
  if (!(this instanceof Accounts)) return new Accounts(client)
  this.client = client
}

/**
* Get an account
* @param {Function} callback a callback with error and account arguments
* @example
* client.acounts.get(function (err, account)) {
*
* })
*/
Accounts.prototype.get = function (username, cb) {
  return this.client.request('get', 'accounts/' + username, null, cb)
}

/**
* Get list of accounts
* @param {Function} callback a callback with error and accounts arguments
* @example
* client.acounts.list(function (err, accounts)) {
*
* })
*/
Accounts.prototype.list = function (opts, cb) {
  return this.client.request('get', 'accounts', opts, cb)
}

/**
* Create an account
* @param {Function} callback a callback with error and account arguments
* @example
* client.acounts.create(function (err, account)) {
*
* })
*/
Accounts.prototype.create = function (opts, cb) {
  return this.client.request('post', 'accounts', opts, cb)
}

/**
* Update an account
* @param {Function} callback a callback with error and account arguments
* @example
* client.acounts.update(function (err, account)) {
*
* })
*/
Accounts.prototype.update = function (username, opts, cb) {
  return this.client.request('put', 'accounts/' + username, opts, cb)
}

/**
* Delete an account
* @param {Function} callback a callback with error argument
* @example
* client.acounts.delete(function (err)) {
*
* })
*/
Accounts.prototype.delete = function (username, cb) {
  return this.client.request('delete', 'accounts/' + username, null, cb)
}
