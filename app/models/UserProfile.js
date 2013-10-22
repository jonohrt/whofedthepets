exports.definition = {
    config: {
        // table schema and adapter information
    },

    extendModel: function(Model) {
        _.extend(Model.prototype, {

            createProfile: function() {
            		var database = require('SyncManager').getDatabase(); 
                var id = "profile:jonohrt1@gmail.com";
                var profileDoc = database.getDocument(id);
                profileDoc.update(function(newRevision) {
                    Ti.API.info('CBL: Add document: ' + newRevision.document.documentId);

                    newRevision.putProperties({
                        'type': "profile",
                        'name': "jon"
                    });

                    return true;
                });
            }
        });

        return Model;
    },

    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            // Extend, override or implement Backbone.Collection 
        });

        return Collection;
    }
}
