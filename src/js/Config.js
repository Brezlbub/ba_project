var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.Config = {
  taskNotStarted: 0,
  taskIsRunning: 1,
  taskIsFinished: 2,
  taskSuccess: 3,
  taskFailed: 4,
  taskFailureCommentSubmitted: 5,

  startTaskText: "Starte die Task",
  stopTaskText: "Beende die Task",

  preSurvey: 3,
  question1: 11,
  question2: 12,
  question3: 13,
  sus: 14,
};

Object.freeze(ChromeExtensionURUT.Config);
