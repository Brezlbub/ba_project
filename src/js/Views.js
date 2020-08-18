var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Views = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    startTaskButton,
    stopTaskButton,
    taskRunningText,
    taskFinishedSection,
    taskFailureSection,
    taskFinishedBox,
    contentStorage,
    timerSection,
    startStopText,
    headline,
    content,
    interactiveSection,
    commentSection,
    proceedText,
    countText,
    contentObjects = [];

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    startTaskButton = document.getElementById("start-task");
    stopTaskButton = document.getElementById("stop-task");
    headline = document.getElementById("headline");
    content = document.getElementById("content");
    countText = document.getElementById("countText");
    proceedText = document.getElementById("proceed-text");
    startStopText = document.getElementById("start-stop-text");
    taskRunningText = document.getElementById("task-running-text");
    timerSection = document.getElementById("timer-section");
    commentSection = document.getElementById("comment-section");
    taskFinishedBox = document.getElementById("task-finished-box");
    interactiveSection = document.getElementById("interactive-section");
    taskFailureSection = document.getElementById("task-failure-section");
    taskFinishedSection = document.getElementById("task-finished-section");
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
    resetViews();
  }

  //if popup window gets closed, all data not stored in chrome.storage get lost
  //taskIsRunning stores the last state of which the programme was running
  //loads last saved state and corresponding views
  function loadSavedViews(currentState){
    fillElements(currentState);
  }

  function loadSavedTaskState(taskRunning, currentState){
    manageTaskRunning(taskRunning, currentState);
  }

  function updateTaskState(event){
    manageTaskRunning(event.taskRunning);
  }

  //shows, hides, enables oder disables or sets contents of elements according to
  // current state of taskIsRunning
  function manageTaskRunning(taskState, currentState){
    if(taskState == ChromeExtensionURUT.Config.taskNotStarted){
      resetViews();
      if(contentObjects[currentState].isTask == 1){
        disableElement(stepNextButton);
      }else{
        enableElement(stepNextButton);
      }
      console.log("task state: " + taskState);
      startStopText.innerHTML = ChromeExtensionURUT.Config.startTaskText;
    }else if(taskState == ChromeExtensionURUT.Config.taskIsRunning){
      startStopText.innerHTML = ChromeExtensionURUT.Config.stopTaskText;
      showElement(taskRunningText);
      showElement(commentSection);
      showElement(timerSection);
      hideElement(startTaskButton);
      enableElement(stopTaskButton);
      disableElement(startTaskButton);
      console.log("task state: " + taskState);
    }else if(taskState == ChromeExtensionURUT.Config.taskIsFinished){
      showElement(taskFinishedSection);
      hideElement(interactiveSection);
      console.log("task state: " + taskState);
    }else if(taskState == ChromeExtensionURUT.Config.taskSuccess){
      enableElement(stepNextButton);
      blinkElement(stepNextButton);
      hideElement(taskFinishedBox);
      showElement(proceedText);
      console.log("task state: " + taskState);
    }else if(taskState == ChromeExtensionURUT.Config.taskFailed){
      hideElement(taskFinishedBox);
      showElement(taskFailureSection);
      showElement(taskFinishedSection);
      console.log("task state: " + taskState);
    }else if(taskState == ChromeExtensionURUT.Config.taskFailureCommentSubmitted){
      showElement(proceedText);
      hideElement(taskRunningText);
      hideElement(commentSection);
      enableElement(stepNextButton);
      hideElement(taskFailureSection);
      hideElement(taskFinishedSection);
      console.log("task state: " + taskState);
    }
  }

  //sets all views back to default before task started
  function resetViews(){
    showElement(startTaskButton);
    enableElement(startTaskButton);
    hideElement(taskRunningText);
    showElement(timerSection);
    hideElement(proceedText);
    hideElement(commentSection);
    disableElement(stopTaskButton);
    hideElement(taskFailureSection);
    hideElement(taskFinishedSection);
    showElement(taskFinishedBox);
    startStopText.innerHTML = ChromeExtensionURUT.Config.startTaskText;
  }

  function setNavigationButtonsDisabledState(currentState) {
    if (contentObjects[currentState].stepBack == 0){
      stepBackButton.disabled = true;
    }else{
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

  function disableElement(el){
    el.disabled = true;
  }

  function enableElement(el){
    el.disabled = false;
  }

  function blinkElement(el){
    el.classList.add("blinking");
  }

  that.init = init;
  that.loadSavedViews = loadSavedViews;
  that.loadSavedTaskState = loadSavedTaskState;
  that.updateTaskState = updateTaskState;
  that.updateViews = updateViews;
  return that;
};
