var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.TaskController = function() {
  "use strict";

  var that = new EventTarget(),
    startTaskButton,
    stopTaskButton,
    taskSuccessButton,
    taskFailedButton,
    submitFailureCommentButton,
    passedSeconds,
    taskRunning,
    failureComment,
    startTime;

  /*************************** public functions *******************************/
  function init() {
    startTaskButton = document.getElementById("start-task");
    stopTaskButton = document.getElementById("stop-task");
    taskSuccessButton = document.getElementById("task-success");
    taskFailedButton = document.getElementById("task-failed");
    submitFailureCommentButton = document.getElementById("submit-failure-comment-button");
    failureComment = document.getElementById("failure-comment");
    startTaskButton.addEventListener("click", startTaskCounter);
    stopTaskButton.addEventListener("click", stopTaskCounter);
    taskSuccessButton.addEventListener("click", taskSucceeded);
    taskFailedButton.addEventListener("click", taskFailed);
    submitFailureCommentButton.addEventListener("click", submitFailureComment);
    return that;
  }

  /*************************** event functions ********************************/
  function startTaskCounter(){
    let currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.sync.set({startTime: currentTimeSeconds});
    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskIsRunning}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskIsRunning;
      dispatchTaskRunningEvent();
    });
  }

  function stopTaskCounter(){
    let currentTimeSeconds;
    currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.sync.get(['startTime'], function(result){
      startTime = result.startTime;
      passedSeconds = currentTimeSeconds - startTime;
      chrome.storage.sync.set({timeDifference: passedSeconds}, function(){
        saveTimeForTaskData();
      });
      chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskIsFinished}, function(){
        taskRunning = ChromeExtensionURUT.Config.taskIsFinished;
        dispatchTaskRunningEvent();
      });
    });
  }

  function taskSucceeded() {
    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskSuccess}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskSuccess;
      dispatchTaskRunningEvent();
    });
  }

  function taskFailed(){
    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskFailed}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskFailed;
      dispatchTaskRunningEvent();
    });
  }

  function submitFailureComment(){
    chrome.storage.sync.set({taskRunning: ChromeExtensionURUT.Config.taskFailureCommentSubmitted}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskFailureCommentSubmitted;
      dispatchTaskRunningEvent();
    });
  }

  /*************************** private functions ******************************/
  function saveTimeForTaskData(){
    chrome.storage.sync.get(['state'], function(result){
        console.log("Currentstate after stop button pressed:" + result.state);
        console.log(passedSeconds);

        switch(result.state){
          case ChromeExtensionURUT.Config.task1:
          chrome.storage.sync.set({timeTask1: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task2:
          chrome.storage.sync.set({timeTask2: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task3:
          chrome.storage.sync.set({timeTask3: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task4:
          chrome.storage.sync.set({timeTask4: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task5:
          chrome.storage.sync.set({timeTask5: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task6:
          chrome.storage.sync.set({timeTask6: passedSeconds});
          break;
        }
      });
  }

  function dispatchTaskRunningEvent() {
    let taskRunningEvent = new Event("onTaskRunning");
    taskRunningEvent.taskRunning = taskRunning;
    that.dispatchEvent(taskRunningEvent);
  }

  that.init = init;
  return that;
};
