var request = require('request');

module.exports = Flatsheet;

function Flatsheet (opts) {
  if (!(this instanceof Flatsheet)) return new Flatsheet(opts)
  opts || (opts = {});

  this.token = opts.token || '';
  this.host = opts.host || 'https://app.flatsheet.io';
  this.apiVersion = opts.apiVersion || '/v1/';
}

Flatsheet.prototype.list = function list (username, cb) {
  return this.req('get', 'sheets', { username: username }, cb);
};

Flatsheet.prototype.index = Flatsheet.prototype.list;

Flatsheet.prototype.sheet = function sheet (slug, cb) {
  return this.req('get', 'sheets/' + this.parseSlug(slug), {}, cb);
};

Flatsheet.prototype.fetch = Flatsheet.prototype.sheet;

Flatsheet.prototype.create = function create (sheet, cb) {
  sheet.rows = JSON.stringify(sheet.rows);
  return this.req('post', 'sheets', { sheet: sheet }, cb);
};

Flatsheet.prototype.update = function update (sheet, cb) {
  sheet.rows = JSON.stringify(sheet.rows);
  return this.req('put', 'sheets/' + this.parseSlug(sheet.slug), { sheet: sheet }, cb);
};

Flatsheet.prototype.destroy = function destroy (slug, cb) {
  return this.req('delete', 'sheets/' + this.parseSlug(slug), {}, cb);
};

Flatsheet.prototype.addRow = function addRow (slug, row, cb) {
  var self = this;

  this.sheet(this.parseSlug(slug), function(err, req){
    var sheet = req;
    sheet.rows.push(row);
    self.update(sheet, cb);
  });
};

Flatsheet.prototype.req = function req (method, path, params, cb) {
  var opts = {
    method: method,
    uri: this.fullUrl(path, params),
    headers: { 'Authorization': 'Token token=' + this.token }, 
    body: params,
    json: true
  };
  
  if (typeof cb === 'undefined') return request(opts);
  else request(opts, getResponse);

  function getResponse (error, response, body){
    if (cb) {
      if (error) return cb(error);
      if (response.statusCode >= 400) return cb({ error: response.statusCode });
      return cb(null, body);
    }
  }
};

Flatsheet.prototype.fullUrl = function fullUrl (path, params) {
  return this.host + '/api' + this.apiVersion + path + '/';
};

Flatsheet.prototype.parseSlug = function parseSlug (text) {
  return text.substr(text.length - 22);
}