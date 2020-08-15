var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Views = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    contentStorage,
    headline,
    countText,
    contentObjects = [];

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    headline = document.getElementById("headline");
    countText = document.getElementById("countText");
    initContentStorage();
    return that;
  }

  function initContentStorage(){
    contentStorage = ChromeExtensionURUT.ContentStorage().init();
    contentObjects = contentStorage.getContentObjects();
  }

  function updateViews(event) {
    let currentState = event.currentState;
    countText.innerHTML = currentState;
    headline.innerHTML = contentObjects[currentState].title;
  }

  function loadSavedViews(state){
    console.log(state);
    //countText.innerHTML = state;
    //headline.innerHTML = contentObjects[state].title;
  }


  /*************************** private functions ******************************/


  that.init = init;
  that.loadSavedViews = loadSavedViews;
  that.updateViews = updateViews;
  return that;
};
