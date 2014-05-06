var qs = require('querystring');
var request = require('request');

module.exports = Flatsheet;

function Flatsheet (opts) {
  if (!(this instanceof Flatsheet)) return new Flatsheet(game, opts)
  opts || (opts = {});

  this.token = opts.token || '';
  this.host = opts.host || 'https://app.flatsheet.io';
  this.apiVersion = opts.apiVersion || '/v1/';
}

Flatsheet.prototype.list = function list (username, cb) {
  return this.get('sheets', { username: username }, cb);
};

Flatsheet.prototype.sheet = function sheet (id, cb) {
  return this.get('sheets/' + id, {}, cb);
};

Flatsheet.prototype.get = function get (path, params, cb) {
  var opts = {
    uri: this.fullUrl(path, params), 
    headers: { 'Authorization': 'Token token=' + this.token }, 
    json: true
  };

  request(opts, getRows)

  function getRows (error, response, body){
    if (cb){
      if (error) return cb(error);
      return cb(null, body);
    }
  }
};

Flatsheet.prototype.fullUrl = function fullUrl (path, params) {
  var q = query(params);
  return this.host + '/api' + this.apiVersion + path + '/' + q;
};

function query (options) {
  return '?' + qs.stringify(options);
}