var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    currentState,
    views;

  function init() {
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
      console.log(result.state);
    });
    initNavigation();
    initViews();
  }

  /*************************** init functions *********************************/
  function initNavigation() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
    loadSavedViews();
  }

  /*************************** public functions *******************************/


  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  function loadSavedViews(){
    views.loadSavedViews(currentState);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();

/*var stepBackButton, stepNextButton, currentStep, countText, headlines;

stepBackButton = document.getElementById("step-back");
stepNextButton = document.getElementById("step-next");
countText = document.getElementById("countText");
headlines = document.getElementsByClassName("headline");

chrome.storage.local.get(['state'], function(result){
  currentStep = result.state;
  countText.innerHTML = currentStep;
});

function getCurrentHeadline(){
  for(var i = 0; i < headlines.length; i++){
    if(i === currentStep) {
      headlines[i].classList.remove('hidden');
    }
  }
}

stepBackButton.addEventListener("click", stepBack);
stepNextButton.addEventListener("click", stepNext);

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

}*/
