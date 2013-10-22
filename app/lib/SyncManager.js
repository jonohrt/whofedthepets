var SYNC_URL = "http://127.0.0.1:4984";
var CBLite = require('com.couchbase.cbl');
var manager = CBLite.createManager();
var database = manager.createDatabase("sync_gateway");



exports.startReplication = function() {
    if (SYNC_URL) {
        // BUG: There are issues w/ replications during cold-start.
        // Setting isPersistent=true causes the most issues. To work
        // around this you can remove replication config (i.e. replicate
        // everything) or run a few times until the exceptions stop.
        //
        // https://github.com/couchbase/couchbase-lite-ios/issues/150

        var replications = database.replicate(SYNC_URL, true);

        for (var i = 0; i < replications.length; i++) {
            var replication = replications[i];

            replication.isContinuous = true;
        }
    }
};

exports.getDatabase = function() {
    return database;
}



// exports.createFruitList = function() {
//     Ti.API.info(database.queryAllDocuments.rows.count);
// // if (database.queryAllDocuments.rows.count == 0) {
//     Ti.API.info('CBL: Init database');
    
//     var foods = [
//         ['Fruit','Apple'],
//         ['Fruit','Banana'],
//         ['Vegetable','Carrot'],
//         ['Vegetable','Potatoe'],
//         ['Meat', 'Beef'],
//         ['Meat', 'Chicken'],
//         ['Fish','Cod'],
//         ['Fish','Haddock']
//     ];
    
//     for (var i=0; i<foods.length; i++) {
//         var food = foods[i];
//         var id = 'food:' + food[1];
        
//         var foodDoc = database.getDocument(id);
//         foodDoc.update(function(newRevision) {
//             Ti.API.info('CBL: Add document: ' + newRevision.document.documentId);
            
//             newRevision.putProperties({
//                 'type':food[0],
//                 'name':food[1]
//             });
            
//             return true;
//         });
//     }
// // }
// }
