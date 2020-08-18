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
};

Object.freeze(ChromeExtensionURUT.Config);
