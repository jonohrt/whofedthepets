var navigateToCreateHousehold, navigateToJoinHousehold;

this.open = function() {
  return $.householdSelectorView.open();
};

navigateToCreateHousehold = function() {
  var newHouseholdView;
  newHouseholdView = Alloy.createController('onboarding/new-household/newHouseholdView').getView();
  return Alloy.Globals.navcontroller.open(newHouseholdView);
};

navigateToJoinHousehold = function() {
  var joinHouseholdView;
  joinHouseholdView = Alloy.createController('onboarding/join-household/joinHouseholdView').getView();
  return Alloy.Globals.navcontroller.open(joinHouseholdView);
};
