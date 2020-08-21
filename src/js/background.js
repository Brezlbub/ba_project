
chrome.storage.sync.set({state: 0});
//task window but not started = 0, task running = 1, task finished = 2, task failed 3
chrome.storage.sync.set({taskRunning: 0});
chrome.storage.sync.set({startTime: 0});
chrome.storage.sync.set({timeDifference: 0});

chrome.storage.sync.set({urlsTask1: []});
chrome.storage.sync.set({urlsTask2: []});
chrome.storage.sync.set({urlsTask3: []});
chrome.storage.sync.set({urlsTask4: []});
chrome.storage.sync.set({urlsTask5: []});
chrome.storage.sync.set({urlsTask6: []});

chrome.storage.sync.set({timeTask1:""});
chrome.storage.sync.set({timeTask2:""});
chrome.storage.sync.set({timeTask3:""});
chrome.storage.sync.set({timeTask4:""});
chrome.storage.sync.set({timeTask5:""});
chrome.storage.sync.set({timeTask6:""});

chrome.storage.sync.set({commentsTask1: []});
chrome.storage.sync.set({commentsTask2: []});
chrome.storage.sync.set({commentsTask3: []});
chrome.storage.sync.set({commentsTask4: []});
chrome.storage.sync.set({commentsTask5: []});
chrome.storage.sync.set({commentsTask6: []});

chrome.storage.sync.set({taskFailureComment1: ""});
chrome.storage.sync.set({taskFailureComment2: ""});
chrome.storage.sync.set({taskFailureComment3: ""});
chrome.storage.sync.set({taskFailureComment4: ""});
chrome.storage.sync.set({taskFailureComment5: ""});
chrome.storage.sync.set({taskFailureComment6: ""});

chrome.storage.sync.set({beschreibung1: ""});
chrome.storage.sync.set({beschreibung2: ""});
chrome.storage.sync.set({beschreibung3: ""});


//Vorabfragebogen
//0 = survey not finished, 1 = survey finished
chrome.storage.sync.set({surveyFinished: 0});

chrome.storage.sync.set({genderButton: ""});
chrome.storage.sync.set({ageInput: ""});
chrome.storage.sync.set({question1input: ""});
chrome.storage.sync.set({question2input: ""});
chrome.storage.sync.set({question3input: ""});
chrome.storage.sync.set({question4input: ""});

chrome.storage.sync.set({pcLaptopWorkButtons: ""});
chrome.storage.sync.set({pcLaptopPrivateButtons: ""});
chrome.storage.sync.set({smartphoneWorkButtons: ""});
chrome.storage.sync.set({smartphonePrivateButtons: ""});
chrome.storage.sync.set({radioKnowledgeButtons: ""});
chrome.storage.sync.set({radioInternetUsageButtons: ""});
chrome.storage.sync.set({radioVeranstaltungsportaleButtons: ""});
chrome.storage.sync.set({radioSingleVeranstaltungsportaleButtons: ""});

chrome.storage.sync.set({sus1: ""});
chrome.storage.sync.set({sus2: ""});
chrome.storage.sync.set({sus3: ""});
chrome.storage.sync.set({sus4: ""});
chrome.storage.sync.set({sus5: ""});
chrome.storage.sync.set({sus6: ""});
chrome.storage.sync.set({sus7: ""});
chrome.storage.sync.set({sus8: ""});
chrome.storage.sync.set({sus9: ""});
chrome.storage.sync.set({sus10: ""});
