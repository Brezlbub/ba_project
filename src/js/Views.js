var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Views = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    startTaskButton,
    stopTaskButton,
    taskRunningText,
    contentStorage,
    headline,
    content,
    interactiveSection,
    commentSection,
    countText,
    contentObjects = [];

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    startTaskButton = document.getElementById("start-task");
    stopTaskButton = document.getElementById("stop-task");
    taskRunningText = document.getElementById("task-running-text");
    headline = document.getElementById("headline");
    content = document.getElementById("content");
    countText = document.getElementById("countText");
    interactiveSection = document.getElementById("interactive-section");
    commentSection = document.getElementById("comment-section");
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
    setNavigationButtonsDisabledState(event.currentState);
  }

  //loads last state and corresponding views
  function loadSavedViews(currentState){
    fillElements(currentState);
  }

  function loadSavedRunningState(taskRunning){
    if(taskRunning == 1){
      stopTaskButton.disabled = false;
      startTaskButton.classList.add("hidden");
      taskRunningText.classList.remove("hidden");
      startTaskButton.disabled = true;
      stepNextButton.disabled = true;
    }
  }

  function manageTaskRunning(event){
    console.log("is event running?" + event.taskRunning);
    startTaskButton.classList.add("hidden");
    taskRunningText.classList.remove("hidden");
    stopTaskButton.disabled = false;
    startTaskButton.disabled = true;
  }

  function setNavigationButtonsDisabledState(currentState) {
    if (contentObjects[currentState].stepBack == 0){
      //disable stepBackButton
      stepBackButton.disabled = true;
    }else{
      //enable stepBackButton
      stepBackButton.disabled = false;
    }
    if(contentObjects[currentState].stepNext == 0){
      stepNextButton.disabled = true;
    }else{
      stepNextButton.disabled = false;
    }
  }

  /*************************** private functions ******************************/
  function fillElements(currentState){
    countText.innerHTML = currentState + "/" + contentObjects.length;
    headline.innerHTML = contentObjects[currentState].title;
    content.innerHTML = contentObjects[currentState].content;

    if(contentObjects[currentState].isTask == 0){
      hideElement(interactiveSection);
    }else{
      showElement(interactiveSection);
    }
  }

  function hideElement(el){
    el.classList.add("hidden");
  }

  function showElement(el){
    el.classList.remove("hidden");
  }

  that.init = init;
  that.loadSavedViews = loadSavedViews;
  that.loadSavedRunningState = loadSavedRunningState;
  that.manageTaskRunning = manageTaskRunning;
  that.updateViews = updateViews;
  return that;
};
