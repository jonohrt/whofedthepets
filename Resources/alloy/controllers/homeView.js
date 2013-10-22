function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "homeView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        id: "homeView"
    });
    $.__views.homeView && $.addTopLevelView($.__views.homeView);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#ccc",
        text: "Home View",
        id: "__alloyId0"
    });
    $.__views.homeView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;