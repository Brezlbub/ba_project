var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    taskController,
    currentState,
    taskRunning,
    views;

  function init() {
    initController();
    initViews();
    initSavedState();
  }

  /*************************** init functions *********************************/
  function initSavedState(){
    chrome.storage.sync.get(['state'], function(result){
      currentState = result.state;
      views.loadSavedViews(currentState);
    });
    chrome.storage.sync.get(['taskRunning'], function(result){
      taskRunning = result.taskRunning;
      views.loadSavedRunningState(taskRunning);
    });
  }

  function initController() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);
      taskController = ChromeExtensionURUT.TaskController().init();
      taskController.addEventListener("onDataSaved", saveTaskData);
      taskController.addEventListener("onTaskRunning", manageTaskRunning)
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
  }

  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  function manageTaskRunning(event){
    views.manageTaskRunning(event);
  }

  function saveTaskData(event){
    let passedSeconds = event.taskTimeInSeconds;
    console.log(passedSeconds);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();
