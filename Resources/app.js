var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.WebAppURL = "http://127.0.0.1:3001";

keychain = require("com.obscure.keychain");

Alloy.Globals.login = keychain.createKeychainItem("WFTPlogin", "asdf2341saf2352341shedgdgg");

var syncManager = require("SyncManager");

syncManager.startReplication();

Alloy.createController("index");