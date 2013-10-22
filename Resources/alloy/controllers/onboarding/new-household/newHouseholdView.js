function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "onboarding/new-household/newHouseholdView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newHouseholdView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        backgroundColor: "white",
        id: "newHouseholdView"
    });
    $.__views.newHouseholdView && $.addTopLevelView($.__views.newHouseholdView);
    $.__views.householdLabel = Ti.UI.createLabel({
        color: "#336699",
        top: 80,
        left: 10,
        text: "Please give your new household a name",
        id: "householdLabel"
    });
    $.__views.newHouseholdView.add($.__views.householdLabel);
    $.__views.householdName = Ti.UI.createTextField({
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "#336699",
        top: "110",
        left: "10",
        width: "250",
        height: "40",
        backgroundColor: "white",
        id: "householdName"
    });
    $.__views.newHouseholdView.add($.__views.householdName);
    $.__views.__alloyId3 = Ti.UI.createButton({
        title: "Next",
        id: "__alloyId3"
    });
    $.__views.newHouseholdView.add($.__views.__alloyId3);
    checkName ? $.__views.__alloyId3.addEventListener("click", checkName) : __defers["$.__views.__alloyId3!click!checkName"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    this.open = function() {
        return $.newHouseholdView.open();
    };
    __defers["$.__views.__alloyId3!click!checkName"] && $.__views.__alloyId3.addEventListener("click", checkName);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;