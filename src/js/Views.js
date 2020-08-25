var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Views = function() {
  "use strict";

  var that = new EventTarget(),
    stepBackButton,
    stepNextButton,
    startTaskButton,
    stopTaskButton,
    downloadButton,
    taskRunningText,
    taskFinishedSection,
    taskFailureSection,
    taskFinishedBox,
    contentStorage,
    startStopText,
    headline,
    hinweis,
    preSurvey,
    susSurvey,
    content,
    interactiveSection,
    commentSection,
    timerSection,
    describeSection,
    pleaseInsertText,
    pleaseInsertTextSUS,
    proceedText,
    countText,
    comment,
    failureComment,
    describeComment,
    contentObjects = [];

  /*************************** public functions *******************************/
  function init() {
    stepBackButton = document.getElementById("step-back");
    stepNextButton = document.getElementById("step-next");
    startTaskButton = document.getElementById("start-task");
    stopTaskButton = document.getElementById("stop-task");
    downloadButton = document.getElementById("download-button");
    hinweis = document.getElementById("hinweis");
    comment = document.getElementById("comment");
    failureComment = document.getElementById("failure-comment");
    describeComment = document.getElementById("describe-comment");
    preSurvey = document.getElementById("pre-survey");
    susSurvey = document.getElementById("sus-survey");
    headline = document.getElementById("headline");
    content = document.getElementById("content");
    countText = document.getElementById("countText");
    proceedText = document.getElementById("proceed-text");
    startStopText = document.getElementById("start-stop-text");
    taskRunningText = document.getElementById("task-running-text");
    pleaseInsertText = document.getElementById("please-insert-text");
    pleaseInsertTextSUS = document.getElementById("please-insert-text-sus");
    timerSection = document.getElementById("timer-section");
    commentSection = document.getElementById("comment-section");
    describeSection = document.getElementById("describe-section");
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
    manageContentObjectsByState(event.currentState);
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

  function updateTaskState(event, state){
    manageTaskRunning(event.taskRunning, state);
  }

  //shows, hides, enables oder disables or sets contents of elements according to
  // current state of taskIsRunning
  function manageTaskRunning(taskState, currentState){

    manageContentObjectsByState(currentState);
    if(currentState == ChromeExtensionURUT.Config.szenario){
      showElement(hinweis);
    }else{
      hideElement(hinweis);
    }
    if(currentState == ChromeExtensionURUT.Config.abschluss){
      hideElement(susSurvey);
      hideElement(stepNextButton);
      disableElement(stepNextButton);
      showElement(downloadButton);
    }else if(taskState == ChromeExtensionURUT.Config.taskNotStarted){
      resetViews();
      if(contentObjects[currentState].isTask == 1){
        disableElement(stepNextButton);
      }else if (contentObjects[currentState].id != 3){
        enableElement(stepNextButton);
      }
      startStopText.innerHTML = ChromeExtensionURUT.Config.startTaskText;
    }else if(taskState == ChromeExtensionURUT.Config.taskIsRunning){
      startStopText.innerHTML = ChromeExtensionURUT.Config.stopTaskText;
      showElement(taskRunningText);
      showElement(commentSection);
      showElement(timerSection);
      hideElement(startTaskButton);
      enableElement(stopTaskButton);
      disableElement(startTaskButton);
    }else if(taskState == ChromeExtensionURUT.Config.taskIsFinished){
      showElement(taskFinishedSection);
      hideElement(interactiveSection);
    }else if(taskState == ChromeExtensionURUT.Config.taskSuccess){
      enableElement(stepNextButton);
      blinkElement(stepNextButton);
      hideElement(taskFinishedBox);
      showElement(proceedText);
    }else if(taskState == ChromeExtensionURUT.Config.taskFailed){
      hideElement(taskFinishedBox);
      showElement(taskFailureSection);
      showElement(taskFinishedSection);
    }else if(taskState == ChromeExtensionURUT.Config.taskFailureCommentSubmitted){
      showElement(proceedText);
      hideElement(taskRunningText);
      hideElement(commentSection);
      enableElement(stepNextButton);
      hideElement(taskFailureSection);
      hideElement(taskFinishedSection);
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

  function manageContentObjectsByState(currentState){

    chrome.storage.local.get(['currentComment'], function(result){
      var currentComment = result.currentComment;
      if(currentState == ChromeExtensionURUT.Config.describe1 || currentState == ChromeExtensionURUT.Config.describe2 || currentState == ChromeExtensionURUT.Config.describe3){
        describeComment.value = currentComment;
      }

      if(currentState == ChromeExtensionURUT.Config.task1 || currentState == ChromeExtensionURUT.Config.task2 || currentState == ChromeExtensionURUT.Config.task3 || currentState == ChromeExtensionURUT.Config.task4 || currentState == ChromeExtensionURUT.Config.task5 || currentState == ChromeExtensionURUT.Config.task6){
        chrome.storage.local.get(['taskRunning'], function(result){
          if(result.taskRunning == ChromeExtensionURUT.Config.taskIsRunning){
            comment.value = currentComment;
          }else if(result.taskRunning == ChromeExtensionURUT.Config.taskFailed){
            failureComment.value = currentComment;
          }
          });
        }
      });

    if(currentState == ChromeExtensionURUT.Config.szenario){
      showElement(hinweis);
    }else{
      hideElement(hinweis);
    }

    if(currentState == ChromeExtensionURUT.Config.preSurvey){
      managePreSurveyView(currentState);
    }

    if( (contentObjects[currentState].id == ChromeExtensionURUT.Config.question1) || (contentObjects[currentState].id == ChromeExtensionURUT.Config.question2) || (contentObjects[currentState].id == ChromeExtensionURUT.Config.question3)) {
      showElement(describeSection);
    }

    if(contentObjects[currentState].id == ChromeExtensionURUT.Config.sus){
      hideElement(describeSection);
      showElement(susSurvey);
      disableElement(stepNextButton);
      hideElement(stepNextButton);
    }

    if(contentObjects[currentState].id == ChromeExtensionURUT.Config.abschluss){
      hideElement(describeSection);
      hideElement(susSurvey);
      disableElement(stepNextButton);
      hideElement(stepNextButton);
      showElement(downloadButton);
    }

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
    deBlinkElement(stepNextButton);
  }

  /*************************** private functions ******************************/
  function fillElements(currentState){
    managePreSurveyView(currentState);
    countText.innerHTML = currentState + 1 + "/" + contentObjects.length;
    headline.innerHTML = contentObjects[currentState].title;
    content.innerHTML = contentObjects[currentState].content;

    if(contentObjects[currentState].isTask == 0){
      hideElement(interactiveSection);
    }else{
      showElement(interactiveSection);
    }
  }

  function managePreSurveyView(currentState){
    chrome.storage.local.get(['surveyFinished'], function(result){
      if((result.surveyFinished == ChromeExtensionURUT.Config.surveyFinished) && (contentObjects[currentState].id == ChromeExtensionURUT.Config.preSurvey)){
        enableElement(stepNextButton);
        showElement(stepNextButton);
        pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.clickNextText;
      }else{
        pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.pleaseFillInputsText;
      }
    });
    if(contentObjects[currentState].id == ChromeExtensionURUT.Config.preSurvey){
      showElement(preSurvey);
      if(contentObjects[currentState].stepNext == ChromeExtensionURUT.Config.false){
        disableElement(stepNextButton);
      }else{
        enableElement(stepNextButton);
      }
    }else{
      hideElement(preSurvey);
    }
  }

  function manageSUSsurveyViews(){
    chrome.storage.local.get(['surveyFinished'], function(result){
      if((result.surveyFinished == ChromeExtensionURUT.Config.surveyFinished) && (contentObjects[currentState].id == ChromeExtensionURUT.Config.sus)){
        enableElement(stepNextButton);
        showElement(stepNextButton);
        blinking(stepNextButton);
        pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.clickNextText;
      }else{
        pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.pleaseFillInputsText;
        disableElement(stepNextButton);
      }
    });
    if(contentObjects[currentState].id == ChromeExtensionURUT.Config.sus){
      showElement(susSurvey);
      if(contentObjects[currentState].stepNext == ChromeExtensionURUT.Config.false){
        disableElement(stepNextButton);
      }else{
        enableElement(stepNextButton);
      }
    }else{
      hideElement(susSurvey);
    }
  }

  function updatePreSurveyViews(event){
    if(event.isCorrect == true){
      chrome.storage.local.set({surveyFinished: ChromeExtensionURUT.Config.surveyFinished});
      enableElement(stepNextButton);
      showElement(stepNextButton);
      pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.clickNextText;
    }else{
      pleaseInsertText.innerHTML = ChromeExtensionURUT.Config.pleaseFillInputsText;
    }
  }

  function updateSUSSurveyViews(event){
    if(event.isCorrect == true){
      chrome.storage.local.set({surveyFinished: ChromeExtensionURUT.Config.surveyFinished});
      enableElement(stepNextButton);
      showElement(stepNextButton);
      pleaseInsertTextSUS.innerHTML = ChromeExtensionURUT.Config.clickNextText;
    }else{
      pleaseInsertTextSUS.innerHTML = ChromeExtensionURUT.Config.pleaseFillInputsText;
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

  function deBlinkElement(el){
    el.classList.remove("blinking");
  }

  that.init = init;
  that.loadSavedViews = loadSavedViews;
  that.updatePreSurveyViews = updatePreSurveyViews;
  that.updateSUSSurveyViews = updateSUSSurveyViews;
  that.loadSavedTaskState = loadSavedTaskState;
  that.updateTaskState = updateTaskState;
  that.updateViews = updateViews;
  return that;
};
