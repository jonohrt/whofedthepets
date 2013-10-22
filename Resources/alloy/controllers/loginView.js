function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loginView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginView = Ti.UI.createWindow({
        backgroundImage: "/images/dog-texture.png",
        id: "loginView"
    });
    $.__views.loginView && $.addTopLevelView($.__views.loginView);
    $.__views.emailLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 160,
        text: "Email Address",
        id: "emailLabel"
    });
    $.__views.loginView.add($.__views.emailLabel);
    $.__views.email = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: 200,
        top: 190,
        id: "email"
    });
    $.__views.loginView.add($.__views.email);
    $.__views.passwordLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 220,
        text: "Password",
        id: "passwordLabel"
    });
    $.__views.loginView.add($.__views.passwordLabel);
    $.__views.password = Ti.UI.createTextField({
        backgroundColor: "#fff",
        width: 200,
        top: 250,
        id: "password",
        passwordMask: "true"
    });
    $.__views.loginView.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        top: 280,
        title: "Log in",
        id: "loginButton"
    });
    $.__views.loginView.add($.__views.loginButton);
    login ? $.__views.loginButton.addEventListener("click", login) : __defers["$.__views.loginButton!click!login"] = true;
    $.__views.signUpLabel = Ti.UI.createLabel({
        color: "#ccc",
        top: 310,
        text: "Don't have an account",
        id: "signUpLabel"
    });
    $.__views.loginView.add($.__views.signUpLabel);
    $.__views.signUpButton = Ti.UI.createButton({
        top: 330,
        title: "SignUp",
        id: "signUpButton"
    });
    $.__views.loginView.add($.__views.signUpButton);
    signup ? $.__views.signUpButton.addEventListener("click", signup) : __defers["$.__views.signUpButton!click!signup"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var User, login, request, signup;
    User = Alloy.Models.instance("User");
    request = Ti.Network.createHTTPClient({
        onload: function() {
            var homeView;
            Ti.API.info("Received text: " + this.responseText);
            User.setLogin($.email.value, $.password.value);
            homeView = Alloy.createController("homeView").getView();
            return Alloy.Globals.navcontroller.open(homeView);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            return alert("error");
        },
        timeout: 5e3
    });
    login = function() {
        request.open("POST", Alloy.Globals.WebAppURL + "/api/users/sign_in");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("charset", "utf-8");
        return request.send(JSON.stringify({
            user: {
                email: $.email.value,
                password: $.password.value
            }
        }));
    };
    signup = function() {
        var signupView;
        signupView = Alloy.createController("signupView").getView();
        return Alloy.Globals.navcontroller.open(signupView);
    };
    __defers["$.__views.loginButton!click!login"] && $.__views.loginButton.addEventListener("click", login);
    __defers["$.__views.signUpButton!click!signup"] && $.__views.signUpButton.addEventListener("click", signup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;