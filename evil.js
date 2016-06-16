exports.run = function(api, event) {
    var dump = '';
    for (var entry in exports.config){
        dump += entry;
    }
    api.sendMessage(dump, event.thread_id);
};
