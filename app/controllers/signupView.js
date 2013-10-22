var login, request, signUp;

request = Ti.Network.createHTTPClient({
  onload: function(e) {
    Ti.API.info("Received text: " + this.responseText);
    alert('success');
    Alloy.Globals.login.account = $.email.value;
    Alloy.Globals.login.valueData = $.password.value;
    return alert("Account name " + Alloy.Globals.login.account);
  },
  onerror: function(e) {
    Ti.API.debug(e.error);
    return alert('error');
  },
  timeout: 5000
});

signUp = function() {
  request.open("POST", Alloy.Globals.WebAppURL + "/api/users");
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader('charset', 'utf-8');
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
