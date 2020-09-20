var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.NavigationController = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    currentState,
    stepBackDisableArray,
    jsonDownloader;

  function init() {
    jsonDownloader = ChromeExtensionURUT.JSONDownloader().init();
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    stepBackButton.addEventListener("click", stepBack);
    stepNextButton.addEventListener("click", stepNext);
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
    });
    return that;
  }

  //navigates step back in application
  function stepBack () {
    currentState--;
    chrome.storage.local.set({state: currentState}, function() {
            dispatchStateChangeEvent();
          });
  }

  //naviagtes step forward in application
  function stepNext () {
    currentState++;
    chrome.storage.local.set({state: currentState}, function() {
            dispatchStateChangeEvent();
            console.log(currentState);
            if(currentState == 14){
              jsonDownloader.initJSONObject();
            }
          });

    chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskNotStarted});
  }

  //fired when a navigation button was clicked
  function dispatchStateChangeEvent() {
    let changeStateEvent = new Event("onStateChanged");
    changeStateEvent.currentState = currentState;
    that.dispatchEvent(changeStateEvent);
  }

  that.init = init;
  return that;
};
