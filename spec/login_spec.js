describe("login module", function() {
  var $, Alloy;
  Alloy = require("alloy");
  $ = {};
  return describe("Auth Model", function() {
    beforeEach(function() {
      $ = Alloy.createController("index");
      return console.log($);
    });
    return describe("call logged in", function() {
      return it("should be false", function() {
        return runs(function() {
          return console.log($);
        });
      });
    });
  });
});
