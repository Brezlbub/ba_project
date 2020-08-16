var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.TimeController = function() {
  "use strict";

  var that = new EventTarget(),
    startTaskButton,
    stopTaskButton,
    passedSeconds,
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
    chrome.storage.local.set({startTime: currentTimeSeconds}, function() {
      console.log("start pressed");
    });
  }

  function stopTaskCounter(){
    let currentTimeSeconds;
    currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.local.get(['startTime'], function(result){
      startTime = result.startTime;
      passedSeconds = currentTimeSeconds - startTime;
      chrome.storage.local.set({timeDifference: passedSeconds}, function(){
        dispatchSaveDataEvent();
        console.log("passedSeconds" + passedSeconds);
      });
    });
  }

  /*************************** private functions ******************************/
  function dispatchSaveDataEvent() {
    let saveDataEvent = new Event("onDataSaved");
    saveDataEvent.taskTimeInSeconds = passedSeconds;
    that.dispatchEvent(saveDataEvent);
  }

  that.init = init;
  return that;
};
