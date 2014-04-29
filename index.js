var qs = require('querystring');
var hyperquest = require('hyperquest');

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
  var buffer = '';

  var res = hyperquest.get(this.fullUrl(path, params), {
    headers: { 'Authorization': 'Token token=' + this.token }
  },
  function(error, res){
    if (cb){
      if (error) return cb(error);

      res.on('error', function (err) {
        return cb(err);
      });

      res.on('data', function(data){
        buffer += data.toString();
      });

      res.on('end', function (data) {
        try {
          cb(null, JSON.parse(buffer));
        } catch (e) {
          cb(e);
        }
      });
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