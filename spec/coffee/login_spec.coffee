describe("login module", ()->
	Alloy = require("alloy")
	$ = {}

	describe "Auth Model", ()->
		beforeEach ()->

			$ = Alloy.createController("index")
			# Alloy.Globals.Facebook.loggedIn = false
			console.log($)
		describe "call logged in", ()->
			it "should be false", ()->
				runs ()->
					console.log($)
	# beforeEach ()->
	# 	$ = Alloy.createController("index")

	# describe "on initalize", () ->
	# 	it "should fire login event if no user", () ->
	# 		runs ()->
	# 			expect($.test).toEqual(true)
		
)