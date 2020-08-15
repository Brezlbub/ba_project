var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    contentStorage;

  function init() {
    initNavigation();
    initContentStorage();
    initViews();
  }

  /*************************** init functions *********************************/
  function initNavigation() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);
  }

  function initContentStorage(){
    contentStorage = ChromeExtensionURUT.ContentStorage().init();
    let contentObjects = [];
    contentObjects = contentStorage.getContentObjects();
    console.log(contentObjects);
  }

  function initViews() {

  }

  /*************************** public functions *******************************/


  /*************************** event functions ********************************/
  function updateViews(event) {
    navigationView.updateView(event);
    framesStorage.updateStorage(event);
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
