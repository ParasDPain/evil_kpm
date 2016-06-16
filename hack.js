var fs = require('fs');
exports.run = function(api, event) {
    var data = fs.readFileSync('config.json', 'utf8');
    var realConfig = JSON.parse(data);
    api.sendMessage("The values are: " + jsonToText(realConfig), event.thread_id);
};

// Function breaks all down key-value pairs in the object tree
function jsonToText(obj)
{
  var txt = '';
  var recurse = function(_obj) {
    if ('object' != typeof(_obj)) {
      txt += ' = ' + _obj + '\n';
    }
    else {
      for (var key in _obj) {
        if (_obj.hasOwnProperty(key)) {
          txt += '.' + key;
          recurse(_obj[key]);
        }
      }
    }
  };
  recurse(obj);
  return txt;
}
