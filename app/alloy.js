// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){
	
// };
// Alloy.Globals.Facebook = require('facebook');
// Alloy.Globals.Facebook.permissions = ['read_stream'];
// Alloy.Globals.Facebook.forceDialogAuth = false;
// console.log(Ti.App.Properties.getString('ti.facebook.appid'))
// Alloy.Globals.Facebook.appid = 362777007185279;
Alloy.Globals.WebAppURL = "http://127.0.0.1:3001";
keychain = require('com.obscure.keychain');
Alloy.Globals.login = keychain.createKeychainItem('WFTPlogin', 'asdf2341saf2352341shedgdgg');

var syncManager = require('SyncManager');

syncManager.startReplication();
// var UserProfile = Alloy.createModel('UserProfile'); 
// UserProfile.createProfile();
// UserProfile.createProfile();
// syncManager.createFruitList();

