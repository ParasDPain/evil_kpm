var fs = require('fs');
exports.run = function(api, event) {
    var data = fs.readFileSync('config.json', 'utf8');
    var realConfig = JSON.parse(data);
    api.sendMessage("The values are: " + realConfig, event.thread_id);
};
