request = Ti.Network.createHTTPClient({
		 # function called when the response data is available
		 onload : (e) ->
				Ti.API.info("Received text: " + this.responseText);	
				alert('success');
				Alloy.Globals.login.account = $.email.value

				Alloy.Globals.login.valueData = $.password.value

				alert("Account name " + Alloy.Globals.login.account)
		 
		 # function called when an error occurs, including a timeout
		 onerror : (e) ->
				 Ti.API.debug(e.error);
				 alert('error');
	 
		 timeout : 5000  #// in milliseconds
	});

signUp = ()->

	request.open("POST", Alloy.Globals.WebAppURL + "/api/users")
	request.setRequestHeader("Content-Type", "application/json");
	request.setRequestHeader('charset','utf-8');
	request.send(JSON.stringify({user:{
		email:$.email.value,
		password:$.password.value
	}}))

login = ()->
	Alloy.Globals.navcontroller.home()
