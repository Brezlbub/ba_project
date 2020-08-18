var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.TaskController = function() {
  "use strict";

  var that = new EventTarget(),
    startTaskButton,
    stopTaskButton,
    passedSeconds,
    taskRunning,
    startTime;

  /*************************** public functions *******************************/
  function init() {
    startTaskButton = document.getElementById("start-task");
    stopTaskButton = document.getElementById("stop-task");
    startTaskButton.addEventListener("click", startTaskCounter);
    stopTaskButton.addEventListener("click", stopTaskCounter);
    return that;
  }

  /*************************** event functions ********************************/
  function startTaskCounter(){
    let currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.sync.set({startTime: currentTimeSeconds});
    chrome.storage.sync.set({taskRunning: 1}, function(){
      taskRunning = 1;
      dispatchTaskRunningEvent();
      console.log("taskRunning");
    });
  }

  function stopTaskCounter(){
    let currentTimeSeconds;
    currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.sync.get(['startTime'], function(result){
      startTime = result.startTime;
      passedSeconds = currentTimeSeconds - startTime;
      chrome.storage.sync.set({timeDifference: passedSeconds}, function(){
        dispatchSaveDataEvent();
        console.log("passedSeconds" + passedSeconds);
      });
      chrome.storage.sync.set({taskRunning: 2}, function(){
        taskRunning = 2;
        dispatchTaskRunningEvent();
      });
    });
  }

  /*************************** private functions ******************************/
  function dispatchSaveDataEvent() {
    let saveDataEvent = new Event("onDataSaved");
    saveDataEvent.taskTimeInSeconds = passedSeconds;
    that.dispatchEvent(saveDataEvent);
  }

  function dispatchTaskRunningEvent() {
    let taskRunningEvent = new Event("onTaskRunning");
    taskRunningEvent.taskRunning = taskRunning;
    that.dispatchEvent(taskRunningEvent);
  }

  that.init = init;
  return that;
};
