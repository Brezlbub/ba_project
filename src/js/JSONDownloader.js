var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.JSONDownloader = function() {
  "use strict";

  var that = new EventTarget(),
  jsonObject,
  sex,
  age,
  pcLaptopWork,
  pcLaptopPrivate,
  smartphoneWork,
  smartphonePrivate,
  itKnowledge,
  internet,
  veranstaltungsportale,
  webseiten,
  frage1,
  frage2,
  frage3,
  frage4,
  task1Time,
  task1Array = [],
  task2Time,
  task2Array = [],
  task3Time,
  task3Array = [],
  task4Time,
  task4Array = [],
  task5Time,
  task5Array = [],
  task6Time,
  task6Array = [],
  task1failureComment,
  task2failureComment,
  task3failureComment,
  task4failureComment,
  task5failureComment,
  task6failureComment,
  beschreibung1,
  beschreibung2,
  beschreibung3,
  sus1, sus2, sus3, sus4, sus5, sus6, sus7, sus8, sus9, sus10;

  /*************************** public functions *******************************/
  function init() {
    return that;
  }

  function initJSONObject(){
    chrome.storage.sync.get(['commentsTask1'], function(result){
        task1Array = result.commentsTask1;
      });
    chrome.storage.sync.get(['commentsTask2'], function(result){
        task2Array = result.commentsTask2;
      });
    chrome.storage.sync.get(['commentsTask3'], function(result){
        task3Array = result.commentsTask3;
      });
    chrome.storage.sync.get(['commentsTask4'], function(result){
        task4Array = result.commentsTask4;
      });
    chrome.storage.sync.get(['commentsTask5'], function(result){
        task5Array = result.commentsTask5;
      });
    chrome.storage.sync.get(['commentsTask6'], function(result){
        task6Array = result.commentsTask6;
      });

    chrome.storage.sync.get(['taskFailureComment1'], function(result){
        task1failureComment = result.taskFailureComment1;
      });
    chrome.storage.sync.get(['taskFailureComment2'], function(result){
        task2failureComment = result.taskFailureComment2;
      });
    chrome.storage.sync.get(['taskFailureComment3'], function(result){
        task3failureComment = result.taskFailureComment3;
      });
    chrome.storage.sync.get(['taskFailureComment4'], function(result){
        task4failureComment = result.taskFailureComment4;
      });
    chrome.storage.sync.get(['taskFailureComment5'], function(result){
        task5failureComment = result.taskFailureComment5;
      });
    chrome.storage.sync.get(['taskFailureComment6'], function(result){
        task6failureComment = result.taskFailureComment6;
        console.log(result.taskFailureComment6);
      });

    chrome.storage.sync.get(['beschreibung1'], function(result){
        beschreibung1 = result.beschreibung1;
      });
    chrome.storage.sync.get(['beschreibung2'], function(result){
        beschreibung2 = result.beschreibung2;
      });
    chrome.storage.sync.get(['beschreibung3'], function(result){
        beschreibung3 = result.beschreibung3;
      });

    chrome.storage.sync.get(['sus1'], function(result){
        sus1 = result.sus1;
        console.log(result.sus1);
      });
    chrome.storage.sync.get(['sus2'], function(result){
        sus2 = result.sus2;
      });
    chrome.storage.sync.get(['sus3'], function(result){
        sus3 = result.sus3;
      });
    chrome.storage.sync.get(['sus4'], function(result){
        sus4 = result.sus4;
      });
    chrome.storage.sync.get(['sus5'], function(result){
        sus5 = result.sus5;
      });
    chrome.storage.sync.get(['sus6'], function(result){
        sus6 = result.sus6;
      });
    chrome.storage.sync.get(['sus7'], function(result){
        sus7 = result.sus7;
      });
    chrome.storage.sync.get(['sus8'], function(result){
        sus8 = result.sus8;
      });
    chrome.storage.sync.get(['sus9'], function(result){
        sus9 = result.sus9;
      });
    chrome.storage.sync.get(['sus10'], function(result){
        sus10 = result.sus10;
      });

    chrome.storage.sync.get(['radioSingleVeranstaltungsportaleButtons'], function(result){
        webseiten = result.radioSingleVeranstaltungsportaleButtons;
        console.log(result.radioSingleVeranstaltungsportaleButtons);
      });
      console.log(webseiten);
    chrome.storage.sync.get(['radioVeranstaltungsportaleButtons'], function(result){
        veranstaltungsportale = result.radioVeranstaltungsportaleButtons;
      });
    chrome.storage.sync.get(['radioInternetUsageButtons'], function(result){
        internet = result.radioInternetUsageButtons;
      });
    chrome.storage.sync.get(['radioKnowledgeButtons'], function(result){
        itKnowledge = result.radioKnowledgeButtons;
      });
    chrome.storage.sync.get(['smartphonePrivateButtons'], function(result){
        smartphonePrivate = result.smartphonePrivateButtons;
      });
    chrome.storage.sync.get(['smartphoneWorkButtons'], function(result){
        smartphoneWork = result.smartphoneWorkButtons;
      });
    chrome.storage.sync.get(['pcLaptopPrivateButtons'], function(result){
        pcLaptopPrivate = result.pcLaptopPrivateButtons;
      });
    chrome.storage.sync.get(['pcLaptopWorkButtons'], function(result){
        pcLaptopWork = result.pcLaptopWorkButtons;
      });
    chrome.storage.sync.get(['question4input'], function(result){
        frage4 = result.question4input;
      });
    chrome.storage.sync.get(['question3input'], function(result){
        frage3 = result.question3input;
      });
    chrome.storage.sync.get(['question2input'], function(result){
        frage2 = result.question2input;
      });
    chrome.storage.sync.get(['question1input'], function(result){
        frage1 = result.question1input;
      });
    chrome.storage.sync.get(['ageInput'], function(result){
        age = result.ageInput;
      });
    chrome.storage.sync.get(['genderButton'], function(result){
        sex = result.genderButton;
      });
      //jsonObject.vorabfragebogen.geschlecht = sex;

    jsonObject = {
      "vorabfragebogen": [{"geschlecht": sex, "alter": age, "pcLaptopWork": pcLaptopWork,
      "pcLaptopPrivate": pcLaptopPrivate, "ITKnowledge": itKnowledge,
      "internet": internet, "veranstaltungsportale": veranstaltungsportale,
      "webseiten": webseiten, "frage1": frage1, "frage2": frage2, "frage3": frage3, "frage4": frage4}],

      "tasks": [{"zeitTask1": task1Time, "commentsTask1": task1Array, "failedTaskComment": task1failureComment,
      "zeitTask2": task2Time, "commentsTask2": task2Array, "failedTaskComment": task2failureComment,
      "zeitTask3": task3Time, "commentsTask3": task3Array, "failedTaskComment": task3failureComment,
      "zeitTask4": task4Time, "commentsTask4": task4Array, "failedTaskComment": task4failureComment,
      "zeitTask5": task5Time, "commentsTask5": task5Array, "failedTaskComment": task5failureComment,
      "zeitTask6": task6Time, "commentsTask6": task6Array, "failedTaskComment": task6failureComment}],

      "susFragebogen": [{"sus1": sus1, "sus2": sus2, "sus3": sus3, "sus4": sus4, "sus5": sus5,
      "sus6": sus6, "sus7": sus7, "sus8": sus8, "sus9": sus9, "sus10": sus10,}],

      "beschreibung": [{"beschreibung1": beschreibung1, "beschreibung2": beschreibung2, "beschreibung3": beschreibung3}]
    };

    //var json = JSON.parse(jsonObject);

    console.log(jsonObject["vorabfragebogen"]);
    console.log(jsonObject.vorabfragebogen);
  }


  that.init = init;
  that.initJSONObject = initJSONObject;
  return that;
};
