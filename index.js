var qs = require('querystring');
var hyperquest = require('hyperquest');
var wait = require('event-stream').wait;

module.exports = Flatsheet;

function Flatsheet (opts) {
  this.username = opts.username;
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
  var res = hyperquest.get(this.fullUrl(path, params), {
    headers: { 'Authorization': 'Token token=' + this.token }
  },
  function(error, res){
    if (cb){
      if (error) return cb(error);

      res.pipe(wait(function (err, sheet) {
        var sheet = JSON.parse(sheet);
        if (err) return cb(err);
        else if (sheet.status >= 400) return cb(sheet);
        return cb(null, sheet);
      }));
    }
  });
};

Flatsheet.prototype.fullUrl = function fullUrl (path, params) {
  var q = query(params);
  return this.host + '/api' + this.apiVersion + path + '/' + q;
};

function query (options) {
  return '?' + qs.stringify(options);
}