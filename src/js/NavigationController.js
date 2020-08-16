var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.NavigationController = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    currentState;

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    stepBackButton.addEventListener("click", stepBack);
    stepNextButton.addEventListener("click", stepNext);
    currentState = getCurrentState();
    return that;
  }

//gets state saved in local storage and sets the current state
  function getCurrentState() {
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
    });
    return currentState;
  }


  /*************************** event functions ********************************/
  function stepBack () {
    currentState--;
    chrome.storage.local.set({state: currentState}, function() {
            dispatchStateChangeEvent();
          });
  }

  function stepNext () {
    currentState++;
    chrome.storage.local.set({state: currentState}, function() {
            dispatchStateChangeEvent();
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
