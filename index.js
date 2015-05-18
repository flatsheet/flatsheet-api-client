var qs = require('querystring')
var request = require('request')

module.exports = Flatsheet

/**
 * Flatsheet API Client
 * @class Flatsheet
 * @param {Object} options options for the api client
 * @param {String} options.host flatsheet server host
 * @param {String} options.username username, only needed if making POST, PUT, DELETE requests
 * @param {String} options.password password, only needed if making POST, PUT, DELETE requests
 * @example
 * var flatsheet = require('flatsheet-api-client');
 * var client = flatsheet();
 *
 */
function Flatsheet (options) {
  if (!(this instanceof Flatsheet)) return new Flatsheet(options)
  options || (options = {})

  this.account = {
    username: options.username || '',
    password: options.password || ''
  }

  this.host = options.host || 'https://app.flatsheet.io'
  this.apiVersion = options.apiVersion || '/v3/'

  this.sheets = require('./sheets')(this)
  this.accounts = require('./accounts')(this)
}

Flatsheet.prototype.request = function (method, path, params, cb) {
  if (typeof params === 'function') {
    cb = params
    params = {}
  }

  var opts = {}

  if (method === 'get') {
    params = qs.stringify(params)
    opts.uri = this.fullUrl(path, params)
  } else {
    opts.uri = this.fullUrl(path)
    opts.body = params
  }

  opts.json = true
  opts.method = method

  if (this.account.username && this.account.password) {
    opts.headers = {
      'Authorization': this.account.username + ':' + this.account.password
    }
  }

  if (typeof cb === 'undefined') return request(opts)
  else request(opts, getResponse)

  function getResponse (error, response, body) {
    if (cb) {
      if (error) return cb(error)
      if (response.statusCode >= 400) return cb({ error: response.statusCode })
      return cb(null, body)
    }
  }
}

Flatsheet.prototype.fullUrl = function fullUrl (path, params) {
  var url = this.host + '/api' + this.apiVersion + path + '/'
  if (params) url += '?' + params
  return url
}
