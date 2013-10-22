User = Alloy.Models.instance('User');

request = Ti.Network.createHTTPClient
	# function called when the response data is available
	onload : (e) ->
		Ti.API.info("Received text: " + this.responseText);	
		User.setLogin($.email.value, $.password.value)
		homeView = Alloy.createController("homeView").getView()
		Alloy.Globals.navcontroller.open(homeView);
		# $.loginView.close()

	# function called when an error occurs, including a timeout
	onerror : (e) ->
		Ti.API.debug(e.error);
		alert('error');

	timeout : 5000  #// in milliseconds


login = ()->
	request.open("POST", Alloy.Globals.WebAppURL + "/api/users/sign_in")
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader('charset','utf-8');
	request.send(JSON.stringify({user:{
		email:$.email.value,
		password:$.password.value
	}}))

signup = ()->
	signupView = Alloy.createController('signupView').getView();
	Alloy.Globals.navcontroller.open(signupView);