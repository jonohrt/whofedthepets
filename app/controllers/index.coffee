

doClick = (e)->  
	alert("hi")


NavigationController = require('NavigationController')
navController = new NavigationController()
Alloy.Globals.navcontroller = navController;
User = Alloy.createModel("User",{})


if (!User.loggedIn())
	loginView = Alloy.createController('loginView').getView(); 
	Alloy.Globals.navcontroller.open(loginView);
	#signupView = Alloy.createController('signupView').getView();
	#Alloy.Globals.navcontroller.open(signupView);



#
# householdSelectorView = Alloy.createController('onboarding/household-selector/householdSelectorView').getView()

# Alloy.Globals.navcontroller.open(householdSelectorView);
 


