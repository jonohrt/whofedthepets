exports.definition = {
  config: {},
  extendModel: function(Model) {
    _.extend(Model.prototype, {
      _loggedIn: false,
      loggedIn: function() {
        return _.isUndefined(Alloy.Globals.login.account) && _.isUndefined(Alloy.Globals.login.valueData);
      },
      setLogin: function(email, password) {
        Alloy.Globals.login.account = email;
        return Alloy.Globals.login.valueData = password;
      }
    });
    return Model;
  }
};
