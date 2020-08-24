var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.JSONDownloader = function() {
  "use strict";

  var that = new EventTarget(),
  jsonObject,
  jsonStringData,
  data,
  bg,
  downloadButton;
  //initJSONButton;

  /*************************** public functions *******************************/
  function init() {
    bg = chrome.extension.getBackgroundPage();
    //initJSONButton = document.getElementById("init-json-button");
    downloadButton = document.getElementById("download-button");
    downloadButton.addEventListener('click', downloadJSONFile);
    //initJSONButton.addEventListener('click', initJSONObject);
    return that;
  }

  function initJSONObject(){

    jsonObject = {
      "vorabfragebogen": {"geschlecht": "", "alter": "", "pcLaptopWork": "",
      "pcLaptopPrivate": "", "ITKnowledge": "",
      "internet": "", "veranstaltungsportale": "",
      "webseiten": "", "frage1": "", "frage2": "", "frage3": "", "frage4": ""},

      "tasks": {"zeitTask1": "", "commentsTask1": "", "task1FailureComment": "", "urlsTask1": "",
      "zeitTask2": "", "commentsTask2": "", "task2FailureComment": "", "urlsTask2": "",
      "zeitTask3": "", "commentsTask3": "", "task3FailureComment": "", "urlsTask3": "",
      "zeitTask4": "", "commentsTask4": "", "task4FailureComment": "", "urlsTask4": "",
      "zeitTask5": "", "commentsTask5": "", "task5FailureComment": "", "urlsTask5": "",
      "zeitTask6": "", "commentsTask6": "", "task6FailureComment": "", "urlsTask6": ""},

      "susFragebogen": {"sus1": "", "sus2": "", "sus3": "", "sus4": "", "sus5": "",
      "sus6": "", "sus7": "", "sus8": "", "sus9": "", "sus10": ""},

      "beschreibung": {"beschreibung1": "", "beschreibung2": "", "beschreibung3": ""}
    };

    chrome.storage.sync.get(['timeTask1'], function(result){
        jsonObject.tasks.zeitTask1 = result.timeTask1;
      });
    chrome.storage.sync.get(['timeTask2'], function(result){
        jsonObject.tasks.zeitTask2 = result.timeTask2;
      });
    chrome.storage.sync.get(['timeTask3'], function(result){
        jsonObject.tasks.zeitTask3 = result.timeTask3;
      });
    chrome.storage.sync.get(['timeTask4'], function(result){
        jsonObject.tasks.zeitTask4 = result.timeTask4;
      });
    chrome.storage.sync.get(['timeTask5'], function(result){
        jsonObject.tasks.zeitTask5 = result.timeTask5;
      });
    chrome.storage.sync.get(['timeTask6'], function(result){
        jsonObject.tasks.zeitTask6 = result.timeTask6;
      });

    chrome.storage.sync.get(['urlsTask1'], function(result){
        jsonObject.tasks.urlsTask1 = result.urlsTask1;
      });
    chrome.storage.sync.get(['urlsTask2'], function(result){
        jsonObject.tasks.urlsTask2 = result.urlsTask2;
      });
    chrome.storage.sync.get(['urlsTask3'], function(result){
        jsonObject.tasks.urlsTask3 = result.urlsTask3;
      });
    chrome.storage.sync.get(['urlsTask4'], function(result){
        jsonObject.tasks.urlsTask4 = result.urlsTask4;
      });
    chrome.storage.sync.get(['urlsTask5'], function(result){
        jsonObject.tasks.urlsTask5 = result.urlsTask5;
      });
    chrome.storage.sync.get(['urlsTask6'], function(result){
        jsonObject.tasks.urlsTask6 = result.urlsTask6;
      });

    chrome.storage.sync.get(['commentsTask1'], function(result){
        jsonObject.tasks.commentsTask1 = result.commentsTask1;
      });
    chrome.storage.sync.get(['commentsTask2'], function(result){
        jsonObject.tasks.commentsTask2 = result.commentsTask2;
      });
    chrome.storage.sync.get(['commentsTask3'], function(result){
        jsonObject.tasks.commentsTask3 = result.commentsTask3;
      });
    chrome.storage.sync.get(['commentsTask4'], function(result){
        jsonObject.tasks.commentsTask4 = result.commentsTask4;
      });
    chrome.storage.sync.get(['commentsTask5'], function(result){
        jsonObject.tasks.commentsTask5 = result.commentsTask5;
      });
    chrome.storage.sync.get(['commentsTask6'], function(result){
        jsonObject.tasks.commentsTask6 = result.commentsTask6;
      });

    chrome.storage.sync.get(['task1FailureComment'], function(result){
        jsonObject.tasks.task1FailureComment = result.task1FailureComment;
      });
    chrome.storage.sync.get(['task2FailureComment'], function(result){
        jsonObject.tasks.task2FailureComment = result.task2FailureComment;
      });
    chrome.storage.sync.get(['task3FailureComment'], function(result){
        jsonObject.tasks.task3FailureComment = result.task3FailureComment;
      });
    chrome.storage.sync.get(['task4FailureComment'], function(result){
        jsonObject.tasks.task4FailureComment = result.task4FailureComment;
      });
    chrome.storage.sync.get(['task5FailureComment'], function(result){
        jsonObject.tasks.task5FailureComment = result.task5FailureComment;
      });
    chrome.storage.sync.get(['task6FailureComment'], function(result){
        jsonObject.tasks.task6FailureComment = result.task6FailureComment;
      });

    chrome.storage.sync.get(['beschreibung1'], function(result){
        jsonObject.beschreibung.beschreibung1 = result.beschreibung1;
      });
    chrome.storage.sync.get(['beschreibung2'], function(result){
        jsonObject.beschreibung.beschreibung2 = result.beschreibung2;
      });
    chrome.storage.sync.get(['beschreibung3'], function(result){
        jsonObject.beschreibung.beschreibung3 = result.beschreibung3;
      });

    chrome.storage.sync.get(['sus1'], function(result){
        jsonObject.susFragebogen.sus1 = result.sus1;
      });
    chrome.storage.sync.get(['sus2'], function(result){
        jsonObject.susFragebogen.sus2 = result.sus2;
      });
    chrome.storage.sync.get(['sus3'], function(result){
        jsonObject.susFragebogen.sus3 = result.sus3;
      });
    chrome.storage.sync.get(['sus4'], function(result){
        jsonObject.susFragebogen.sus4 = result.sus4;
      });
    chrome.storage.sync.get(['sus5'], function(result){
        jsonObject.susFragebogen.sus5 = result.sus5;
      });
    chrome.storage.sync.get(['sus6'], function(result){
        jsonObject.susFragebogen.sus6 = result.sus6;
      });
    chrome.storage.sync.get(['sus7'], function(result){
        jsonObject.susFragebogen.sus7 = result.sus7;
      });
    chrome.storage.sync.get(['sus8'], function(result){
        jsonObject.susFragebogen.sus8 = result.sus8;
      });
    chrome.storage.sync.get(['sus9'], function(result){
        jsonObject.susFragebogen.sus9 = result.sus9;
      });
    chrome.storage.sync.get(['sus10'], function(result){
        jsonObject.susFragebogen.sus10 = result.sus10;
      });

    chrome.storage.sync.get(['radioSingleVeranstaltungsportaleButtons'], function(result){
        jsonObject.vorabfragebogen.webseiten = result.radioSingleVeranstaltungsportaleButtons;
      });
    chrome.storage.sync.get(['radioVeranstaltungsportaleButtons'], function(result){
        jsonObject.vorabfragebogen.veranstaltungsportale = result.radioVeranstaltungsportaleButtons;
      });
    chrome.storage.sync.get(['radioInternetUsageButtons'], function(result){
        jsonObject.vorabfragebogen.internet = result.radioInternetUsageButtons;
      });
    chrome.storage.sync.get(['radioKnowledgeButtons'], function(result){
        jsonObject.vorabfragebogen.ITKnowledge = result.radioKnowledgeButtons;
      });
    chrome.storage.sync.get(['smartphonePrivateButtons'], function(result){
        jsonObject.vorabfragebogen.smartphonePrivate = result.smartphonePrivateButtons;
      });
    chrome.storage.sync.get(['smartphoneWorkButtons'], function(result){
        jsonObject.vorabfragebogen.smartphoneWork = result.smartphoneWorkButtons;
      });
    chrome.storage.sync.get(['pcLaptopPrivateButtons'], function(result){
        jsonObject.vorabfragebogen.pcLaptopPrivate = result.pcLaptopPrivateButtons;
      });
    chrome.storage.sync.get(['pcLaptopWorkButtons'], function(result){
        jsonObject.vorabfragebogen.pcLaptopWork = result.pcLaptopWorkButtons;
      });
    chrome.storage.sync.get(['question4input'], function(result){
        jsonObject.vorabfragebogen.frage4 = result.question4input;
      });
    chrome.storage.sync.get(['question3input'], function(result){
        jsonObject.vorabfragebogen.frage3 = result.question3input;
      });
    chrome.storage.sync.get(['question2input'], function(result){
        jsonObject.vorabfragebogen.frage2 = result.question2input;
      });
    chrome.storage.sync.get(['question1input'], function(result){
        jsonObject.vorabfragebogen.frage1 = result.question1input;
      });
    chrome.storage.sync.get(['ageInput'], function(result){
        jsonObject.vorabfragebogen.alter = result.ageInput;
      });
    chrome.storage.sync.get(['genderButton'], function(result){
        jsonObject.vorabfragebogen.geschlecht = result.genderButton;
        bg.data = jsonObject;
      });
  }

  function downloadJSONFile(){
    //https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    var newJSONobject;
    newJSONobject = bg.data;
    data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(newJSONobject));
    downloadButton.setAttribute("href", data);
    downloadButton.setAttribute("download", "testergebnisse.json");
  }

  that.init = init;
  that.initJSONObject = initJSONObject;
  return that;
};
