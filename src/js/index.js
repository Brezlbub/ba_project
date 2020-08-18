var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    timeController,
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
      timeController = ChromeExtensionURUT.TimeController().init();
      timeController.addEventListener("onDataSaved", saveTaskData);
      timeController.addEventListener("onTaskRunning", manageTaskRunning)
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
  }

  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  function manageTaskRunning(event){
    views.manageTaskRunning(event.taskRunning);
  }

  function saveTaskData(event){
    let passedSeconds = event.taskTimeInSeconds;
    console.log(passedSeconds);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();
