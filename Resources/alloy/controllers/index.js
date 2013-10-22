function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        color: "#000",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var NavigationController, User, doClick, loginView, navController;
    doClick = function() {
        return alert("hi");
    };
    NavigationController = require("NavigationController");
    navController = new NavigationController();
    Alloy.Globals.navcontroller = navController;
    User = Alloy.createModel("User", {});
    if (!User.loggedIn()) {
        loginView = Alloy.createController("loginView").getView();
        Alloy.Globals.navcontroller.open(loginView);
    }
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;