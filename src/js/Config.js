var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Config = {

  true: 1,
  false: 0,

  taskNotStarted: 0,
  taskIsRunning: 1,
  taskIsFinished: 2,
  taskSuccess: 3,
  taskFailed: 4,
  taskFailureCommentSubmitted: 5,

  task1: 4,
  task2: 5,
  task3: 6,
  task4: 7,
  task5: 8,
  task6: 9,

  describe1: 10,
  describe2: 11,
  describe3: 12,

  startTaskText: "Starte die Task",
  stopTaskText: "Beende die Task",
  clickNextText: "Klicke oben rechts auf Weiter.",
  pleaseFillInputsText: "Bitte füllen Sie alle Felder aus.",

  surveyNotFinished: 0,
  surveyFinished: 1,

  preSurvey: 3,
  question1: 11,
  question2: 12,
  question3: 13,
  sus: 14,
  abschluss: 15,
};

Object.freeze(ChromeExtensionURUT.Config);
