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
    stopTaskButton = document.getElementById("stop-task");
    startTaskButton = document.getElementById("start-task");
    taskFailedButton = document.getElementById("task-failed");
    failureComment = document.getElementById("failure-comment");
    taskSuccessButton = document.getElementById("task-success");
    submitFailureCommentButton = document.getElementById("submit-failure-comment-button");

    stopTaskButton.addEventListener("click", stopTaskCounter);
    startTaskButton.addEventListener("click", startTaskCounter);
    taskFailedButton.addEventListener("click", taskFailed);
    taskSuccessButton.addEventListener("click", taskSucceeded);
    submitFailureCommentButton.addEventListener("click", submitFailureComment);
    return that;
  }

  function startTaskCounter(){
    let currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.local.set({startTime: currentTimeSeconds});
    chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskIsRunning}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskIsRunning;
      dispatchTaskRunningEvent();
    });
  }

  function stopTaskCounter(){
    let currentTimeSeconds;
    currentTimeSeconds = Math.floor(Date.now() / 1000);
    chrome.storage.local.get(['startTime'], function(result){
      startTime = result.startTime;
      passedSeconds = currentTimeSeconds - startTime;
      chrome.storage.local.set({timeDifference: passedSeconds}, function(){
        saveTimeForTaskData();
      });
      chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskIsFinished}, function(){
        taskRunning = ChromeExtensionURUT.Config.taskIsFinished;
        dispatchTaskRunningEvent();
      });
    });
  }

  function taskSucceeded() {
    chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskSuccess}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskSuccess;
      dispatchTaskRunningEvent();
    });
  }

  function taskFailed(){
    chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskFailed}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskFailed;
      dispatchTaskRunningEvent();
    });
  }

  function submitFailureComment(){
    chrome.storage.local.set({taskRunning: ChromeExtensionURUT.Config.taskFailureCommentSubmitted}, function(){
      taskRunning = ChromeExtensionURUT.Config.taskFailureCommentSubmitted;
      dispatchTaskRunningEvent();
    });
  }

  /*************************** private functions ******************************/
  function saveTimeForTaskData(){
    chrome.storage.local.get(['state'], function(result){

        switch(result.state){
          case ChromeExtensionURUT.Config.task1:
          chrome.storage.local.set({timeTask1: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task2:
          chrome.storage.local.set({timeTask2: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task3:
          chrome.storage.local.set({timeTask3: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task4:
          chrome.storage.local.set({timeTask4: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task5:
          chrome.storage.local.set({timeTask5: passedSeconds});
          break;
          case ChromeExtensionURUT.Config.task6:
          chrome.storage.local.set({timeTask6: passedSeconds});
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
