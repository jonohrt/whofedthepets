function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "onboarding/join-household/joinHouseholdView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.joinHouseholdView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        id: "joinHouseholdView"
    });
    $.__views.joinHouseholdView && $.addTopLevelView($.__views.joinHouseholdView);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        color: "#ccc",
        text: "Joining",
        id: "__alloyId2"
    });
    $.__views.joinHouseholdView.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;