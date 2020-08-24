var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.App = (function() {
  "use strict";

  var that = {},
    navigationController,
    presurveyController,
    susController,
    taskController,
    dataController,
    currentState,
    taskRunning,
    views;

  function init() {
    initController();
    initViews();
    //initJsonDownloader();
  }

/*************************** init functions *********************************/

  function initSavedState(){
    chrome.storage.local.get(['state'], function(result){
      currentState = result.state;
      views.loadSavedViews(currentState);
      chrome.storage.local.get(['taskRunning'], function(result){
        taskRunning = result.taskRunning;
        views.loadSavedTaskState(taskRunning, currentState);
      });
    });
  }

  function initController() {
      navigationController = ChromeExtensionURUT.NavigationController().init();
      navigationController.addEventListener("onStateChanged", updateViews);

      taskController = ChromeExtensionURUT.TaskController().init();
      taskController.addEventListener("onTaskRunning", updateTaskState);

      presurveyController = ChromeExtensionURUT.PreSurveyController().init();
      presurveyController.addEventListener("onCorrectInputs", updatePreSurveyViews);

      susController = ChromeExtensionURUT.SUSController().init();
      susController.addEventListener("onCorrectInputs", updateSUSSurveyViews);

      dataController = ChromeExtensionURUT.DataController().init();
      //dataController.addEventListener()
  }

  function initViews() {
    views = ChromeExtensionURUT.Views().init();
    initSavedState();
  }

  function initJsonDownloader(){
    jsonDownloader = ChromeExtensionURUT.JSONDownloader().init();
  }

  /*************************** event functions ********************************/
  function updateViews(event) {
    views.updateViews(event);
  }

  function updateSUSSurveyViews(event){
    views.updateSUSSurveyViews(event);
  }

  function updatePreSurveyViews(event){
    views.updatePreSurveyViews(event);
  }

  function updateTaskState(event){
    views.updateTaskState(event, currentState);
  }

  that.init = init;
  return that;
}());

ChromeExtensionURUT.App.init();
