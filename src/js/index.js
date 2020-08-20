var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    presurveyController,
    taskController,
    currentState,
    taskRunning,
    views;

  function init() {
    initController();
    initViews();
  }

  /*************************** init functions *********************************/
  function initSavedState(){
    chrome.storage.sync.get(['state'], function(result){
      currentState = result.state;
      views.loadSavedViews(currentState);
      chrome.storage.sync.get(['taskRunning'], function(result){
        taskRunning = result.taskRunning;
        views.loadSavedTaskState(taskRunning, currentState);
      });
    });
  }

  function initController() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);
      taskController = ChromeExtensionURUT.TaskController().init();
      taskController.addEventListener("onDataSaved", saveTaskData);
      taskController.addEventListener("onTaskRunning", updateTaskState);
      presurveyController = ChromeExtensionURUT.PreSurveyController().init();
      presurveyController.addEventListener("onCorrectInputs", updatePreSurveyViews);
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
    initSavedState();
  }

  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  function updatePreSurveyViews(event){
    views.updatePreSurveyViews(event);
  }

  function updateTaskState(event){
    views.updateTaskState(event, currentState);
  }

  function saveTaskData(event){
    let passedSeconds = event.taskTimeInSeconds;
    console.log(passedSeconds);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();
