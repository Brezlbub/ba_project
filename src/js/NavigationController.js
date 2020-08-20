var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.NavigationController = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    currentState,
    stepBackDisableArray;

  /*************************** public functions *******************************/
  function init() {
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
          });

    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskNotStarted}, function() {
            console.log(ChromeExtensionURUT.Config.taskNotStarted);
          });
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
