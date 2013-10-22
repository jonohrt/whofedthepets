var User, login, request, signup;

User = Alloy.Models.instance('User');

request = Ti.Network.createHTTPClient({
  onload: function(e) {
    var homeView;
    Ti.API.info("Received text: " + this.responseText);
    User.setLogin($.email.value, $.password.value);
    homeView = Alloy.createController("homeView").getView();
    return Alloy.Globals.navcontroller.open(homeView);
  },
  onerror: function(e) {
    Ti.API.debug(e.error);
    return alert('error');
  },
  timeout: 5000
});

login = function() {
  request.open("POST", Alloy.Globals.WebAppURL + "/api/users/sign_in");
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('charset', 'utf-8');
  return request.send(JSON.stringify({
    user: {
      email: $.email.value,
      password: $.password.value
    }
  }));
};

signup = function() {
  var signupView;
  signupView = Alloy.createController('signupView').getView();
  return Alloy.Globals.navcontroller.open(signupView);
};
