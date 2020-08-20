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
  sus1, sus2, sus3, sus4, sus5, sus6, sus7, sus8, sus9, sus10;

  /*************************** public functions *******************************/
  function init() {
    jsonObject = {
      "vorabfragebogen": [{"geschlecht": sex, "alter": age, "pcLaptopWork": pcLaptopWork,
                           "pcLaptopPrivate": pcLaptopPrivate, "ITKnowledge": itKnowledge,
                           "internet": internet, "veranstaltungsportale": veranstaltungsportale,
                           "webseiten": webseiten, "frage1": frage1, "frage2": frage2, "frage3": frage3, "frage4": frage4}],

      "tasks": [{"zeitTask1": task1Time, "commentsTask1": task1Array,
                 "zeitTask2": task2Time, "commentsTask2": task2Array,
                 "zeitTask3": task3Time, "commentsTask3": task3Array,
                 "zeitTask4": task4Time, "commentsTask4": task4Array,
                 "zeitTask5": task5Time, "commentsTask5": task5Array,
                 "zeitTask6": task6Time, "commentsTask6": task6Array,}],

      "susFragebogen": [{"sus1": sus1, "sus2": sus2, "sus3": sus3, "sus4": sus4, "sus5": sus5,
                         "sus6": sus6, "sus7": sus7, "sus8": sus8, "sus9": sus9, "sus10": sus10,}]
    };
    console.log(jsonObject);
    return that;
  }


  that.init = init;
  return that;
};
