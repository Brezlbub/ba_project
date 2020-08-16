var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    currentState,
    views;

  function init() {
    initNavigation();
    initViews();
    initSavedState();
  }

  /*************************** init functions *********************************/
  function initSavedState(){
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
      views.loadSavedViews(currentState);
    });
  }

  function initNavigation() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
  }

  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();
