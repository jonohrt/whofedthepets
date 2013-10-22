@open = () ->
  return $.householdSelectorView.open()

navigateToCreateHousehold = () ->
	newHouseholdView = Alloy.createController('onboarding/new-household/newHouseholdView').getView()
	Alloy.Globals.navcontroller.open(newHouseholdView)

navigateToJoinHousehold = () ->
	joinHouseholdView = Alloy.createController('onboarding/join-household/joinHouseholdView').getView()
	Alloy.Globals.navcontroller.open(joinHouseholdView)