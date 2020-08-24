var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.NavigationController = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    currentState,
    stepBackDisableArray,
    jsonDownloader;

  /*************************** public functions *******************************/
  function init() {
    jsonDownloader = ChromeExtensionURUT.JSONDownloader().init();
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    stepBackButton.addEventListener("click", stepBack);
    stepNextButton.addEventListener("click", stepNext);
    chrome.storage.sync.get(['state'], function(result){
      currentState = result.state;
    });
    return that;
  }

  //gets state saved in local storage and sets the current state


/*************************** event functions ********************************/
  function stepBack () {
    currentState--;
    chrome.storage.sync.set({state: currentState}, function() {
            dispatchStateChangeEvent();
          });
  }

  function stepNext () {
    currentState++;
    chrome.storage.sync.set({state: currentState}, function() {
            dispatchStateChangeEvent();
            console.log(currentState);
            if(currentState == 14){
              jsonDownloader.initJSONObject();
            }
          });

    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskNotStarted});
  }

  /*************************** private functions ******************************/
  function dispatchStateChangeEvent() {
    let changeStateEvent = new Event("onStateChanged");
    changeStateEvent.currentState = currentState;
    that.dispatchEvent(changeStateEvent);
  }

  that.init = init;
  return that;
};
