var fs = require('fs');
var async = require('async');


module.exports = function (path, data, callback) {

  function load (callback) {
    fs.readFile(path, 'utf8', callback);
  }

  function parse (content, callback) {
    try {
      var json_data = JSON.parse(content);
      callback(null, json_data);
    } catch (error) {
      callback(error);
    }
  }

  function update (json_data, callback) {
    for (key in data) {
      json_data[key] = data[key];
    }
    callback(null, json_data);
  }

  function save (json_data, callback) {
    var content = JSON.stringify(json_data, null, '  ');
    fs.writeFile(path, content, 'utf8', callback);
  }

  async.waterfall([
    load,
    parse,
    update,
    save
  ], function (error, result) {
    callback(error);
  });

};
