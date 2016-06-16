var realConfig = require.safe('../../config.json')
exports.run = function(api, event) {
    var parsed = JSON.parse(realConfig);
    api.sendMessage("The values are: " + parsed, event.thread_id);
};
