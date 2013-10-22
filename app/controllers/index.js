var NavigationController, User, doClick, loginView, navController;

doClick = function(e) {
  return alert("hi");
};

NavigationController = require('NavigationController');

navController = new NavigationController();

Alloy.Globals.navcontroller = navController;

User = Alloy.createModel("User", {});

if (!User.loggedIn()) {
  loginView = Alloy.createController('loginView').getView();
  Alloy.Globals.navcontroller.open(loginView);
}
