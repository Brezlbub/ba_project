var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Views = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    contentStorage,
    headline,
    content,
    countText,
    contentObjects = [];

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    headline = document.getElementById("headline");
    content = document.getElementById("content");
    countText = document.getElementById("countText");
    countText = document.getElementById("interactive-section");
    initContentStorage();
    return that;
  }

  function initContentStorage(){
    contentStorage = ChromeExtensionURUT.ContentStorage().init();
    contentObjects = contentStorage.getContentObjects();
  }

  //updates views when buttons were clicked and state changed
  function updateViews(event) {
    fillElements(event.currentState);
  }

  //loads last state and corresponding views
  function loadSavedViews(currentState){
    fillElements(currentState);
  }

  /*************************** private functions ******************************/
  function fillElements(currentState){
    countText.innerHTML = currentState + "/" + contentObjects.length;
    headline.innerHTML = contentObjects[currentState].title;
    content.innerHTML = contentObjects[currentState].content;
  }

  that.init = init;
  that.loadSavedViews = loadSavedViews;
  that.updateViews = updateViews;
  return that;
};
