exports.definition = {
  config: {
  
  },
  extendModel: (Model) ->
    _.extend(Model.prototype, {
      _loggedIn: false,
      loggedIn: () ->
        return  (_.isUndefined(Alloy.Globals.login.account) && _.isUndefined(Alloy.Globals.login.valueData))
    
      
      setLogin: (email, password) ->
        Alloy.Globals.login.account = email
        Alloy.Globals.login.valueData = password
        
    });
    return Model;
  
};
