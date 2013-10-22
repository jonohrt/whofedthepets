function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "onboarding/household-selector/householdSelectorView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.householdSelectorView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        backgroundColor: "white",
        id: "householdSelectorView"
    });
    $.__views.householdSelectorView && $.addTopLevelView($.__views.householdSelectorView);
    $.__views.createHouseholdBtn = Ti.UI.createButton({
        top: 100,
        title: "Create a new household",
        id: "createHouseholdBtn"
    });
    $.__views.householdSelectorView.add($.__views.createHouseholdBtn);
    navigateToCreateHousehold ? $.__views.createHouseholdBtn.addEventListener("click", navigateToCreateHousehold) : __defers["$.__views.createHouseholdBtn!click!navigateToCreateHousehold"] = true;
    $.__views.joinHouseholdBtn = Ti.UI.createButton({
        top: 200,
        title: "Join an existing household",
        id: "joinHouseholdBtn"
    });
    $.__views.householdSelectorView.add($.__views.joinHouseholdBtn);
    navigateToJoinHousehold ? $.__views.joinHouseholdBtn.addEventListener("click", navigateToJoinHousehold) : __defers["$.__views.joinHouseholdBtn!click!navigateToJoinHousehold"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var navigateToCreateHousehold, navigateToJoinHousehold;
    this.open = function() {
        return $.householdSelectorView.open();
    };
    navigateToCreateHousehold = function() {
        var newHouseholdView;
        newHouseholdView = Alloy.createController("onboarding/new-household/newHouseholdView").getView();
        return Alloy.Globals.navcontroller.open(newHouseholdView);
    };
    navigateToJoinHousehold = function() {
        var joinHouseholdView;
        joinHouseholdView = Alloy.createController("onboarding/join-household/joinHouseholdView").getView();
        return Alloy.Globals.navcontroller.open(joinHouseholdView);
    };
    __defers["$.__views.createHouseholdBtn!click!navigateToCreateHousehold"] && $.__views.createHouseholdBtn.addEventListener("click", navigateToCreateHousehold);
    __defers["$.__views.joinHouseholdBtn!click!navigateToJoinHousehold"] && $.__views.joinHouseholdBtn.addEventListener("click", navigateToJoinHousehold);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;