var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.NavigationController = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    currentState;

  /*************************** public functions *******************************/
  function init() {
    console.log("navigation running");
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    stepBackButton.addEventListener("click", stepBack);
    stepNextButton.addEventListener("click", stepNext);
    return that;
  }

//gets state saved in local storage and sets the current state
  function getCurrentState() {
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
      //manipulate view elsewhere
      //countText.innerHTML = currentStep;
    });
    return currentState;
  }

  function setStep1() {
    currentStep++;
  }

  /*************************** event functions ********************************/
  function stepBack () {
    currentStep--;
    chrome.storage.local.set({state: currentStep}, function() {
            countText.innerHTML = currentStep;
          });
          getCurrentHeadline();
  }

  function stepNext () {
    currentStep++;
    chrome.storage.local.set({state: currentStep}, function() {
            countText.innerHTML = currentStep;
          });
          getCurrentHeadline();
  }

  /*************************** private functions ******************************/
  function dispatchStateChangeEvent(isNext) {
    let changeStateEvent = new Event("onStateChanged");
    changeStepsEvent.dataArray = dataArray;
    changeStepsEvent.isNext = isNext;
    changeStepsEvent.currentStep = currentStep;
    that.dispatchEvent(changeStateEvent);
    dataArray = [];
  }

  that.init = init;
  that.getCurrentState = getCurrentState;
  return that;
};
