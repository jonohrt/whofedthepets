function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "signupView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.signupView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        id: "signupView"
    });
    $.__views.signupView && $.addTopLevelView($.__views.signupView);
    $.__views.nameLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 100,
        text: "Please give your name",
        id: "nameLabel"
    });
    $.__views.signupView.add($.__views.nameLabel);
    $.__views.name = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: 200,
        top: 130,
        id: "name"
    });
    $.__views.signupView.add($.__views.name);
    $.__views.emailLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 160,
        text: "Please give your email",
        id: "emailLabel"
    });
    $.__views.signupView.add($.__views.emailLabel);
    $.__views.email = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: 200,
        top: 190,
        id: "email"
    });
    $.__views.signupView.add($.__views.email);
    $.__views.passwordLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 220,
        text: "Please give your password",
        id: "passwordLabel"
    });
    $.__views.signupView.add($.__views.passwordLabel);
    $.__views.password = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: 200,
        top: 250,
        id: "password"
    });
    $.__views.signupView.add($.__views.password);
    $.__views.signUp = Ti.UI.createButton({
        top: 280,
        title: "Sign Up",
        id: "signUp"
    });
    $.__views.signupView.add($.__views.signUp);
    signUp ? $.__views.signUp.addEventListener("click", signUp) : __defers["$.__views.signUp!click!signUp"] = true;
    $.__views.loginLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 320,
        text: "Already have an account?",
        id: "loginLabel"
    });
    $.__views.signupView.add($.__views.loginLabel);
    $.__views.loginButton = Ti.UI.createButton({
        top: 350,
        title: "Log In",
        id: "loginButton"
    });
    $.__views.signupView.add($.__views.loginButton);
    login ? $.__views.loginButton.addEventListener("click", login) : __defers["$.__views.loginButton!click!login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var login, request, signUp;
    request = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("Received text: " + this.responseText);
            alert("success");
            Alloy.Globals.login.account = $.email.value;
            Alloy.Globals.login.valueData = $.password.value;
            return alert("Account name " + Alloy.Globals.login.account);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            return alert("error");
        },
        timeout: 5e3
    });
    signUp = function() {
        request.open("POST", Alloy.Globals.WebAppURL + "/api/users");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("charset", "utf-8");
        return request.send(JSON.stringify({
            user: {
                email: $.email.value,
                password: $.password.value
            }
        }));
    };
    login = function() {
        return Alloy.Globals.navcontroller.home();
    };
    __defers["$.__views.signUp!click!signUp"] && $.__views.signUp.addEventListener("click", signUp);
    __defers["$.__views.loginButton!click!login"] && $.__views.loginButton.addEventListener("click", login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;