var SYNC_URL = "http://127.0.0.1:4984";

var CBLite = require("com.couchbase.cbl");

var manager = CBLite.createManager();

var database = manager.createDatabase("sync_gateway");

exports.startReplication = function() {
    if (SYNC_URL) {
        var replications = database.replicate(SYNC_URL, true);
        for (var i = 0; replications.length > i; i++) {
            var replication = replications[i];
            replication.isContinuous = true;
        }
    }
};

exports.getDatabase = function() {
    return database;
};