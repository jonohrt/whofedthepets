exports.definition = {
    config: {},
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            createProfile: function() {
                var database = require("SyncManager").getDatabase();
                var id = "profile:jonohrt1@gmail.com";
                var profileDoc = database.getDocument(id);
                profileDoc.update(function(newRevision) {
                    Ti.API.info("CBL: Add document: " + newRevision.document.documentId);
                    newRevision.putProperties({
                        type: "profile",
                        name: "jon"
                    });
                    return true;
                });
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("UserProfile", exports.definition, []);

collection = Alloy.C("UserProfile", exports.definition, model);

exports.Model = model;

exports.Collection = collection;