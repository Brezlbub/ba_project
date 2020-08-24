//data of jsonObject with collected data
var data;
//navigation state
chrome.storage.local.set({state: 0});
//task window but not started = 0, task running = 1, task finished = 2, task failed 3
chrome.storage.local.set({taskRunning: 0});
chrome.storage.local.set({startTime: 0});
chrome.storage.local.set({timeDifference: 0});

chrome.storage.local.set({urlsTask1: []});
chrome.storage.local.set({urlsTask2: []});
chrome.storage.local.set({urlsTask3: []});
chrome.storage.local.set({urlsTask4: []});
chrome.storage.local.set({urlsTask5: []});
chrome.storage.local.set({urlsTask6: []});

chrome.storage.local.set({timeTask1:""});
chrome.storage.local.set({timeTask2:""});
chrome.storage.local.set({timeTask3:""});
chrome.storage.local.set({timeTask4:""});
chrome.storage.local.set({timeTask5:""});
chrome.storage.local.set({timeTask6:""});

chrome.storage.local.set({commentsTask1: []});
chrome.storage.local.set({commentsTask2: []});
chrome.storage.local.set({commentsTask3: []});
chrome.storage.local.set({commentsTask4: []});
chrome.storage.local.set({commentsTask5: []});
chrome.storage.local.set({commentsTask6: []});

chrome.storage.local.set({task1FailureComment: ""});
chrome.storage.local.set({task2FailureComment: ""});
chrome.storage.local.set({task3FailureComment: ""});
chrome.storage.local.set({task4FailureComment: ""});
chrome.storage.local.set({task5FailureComment: ""});
chrome.storage.local.set({task6FailureComment: ""});

chrome.storage.local.set({beschreibung1: ""});
chrome.storage.local.set({beschreibung2: ""});
chrome.storage.local.set({beschreibung3: ""});

//Vorabfragebogen
//0 = survey not finished, 1 = survey finished
chrome.storage.local.set({surveyFinished: 0});

chrome.storage.local.set({genderButton: ""});
chrome.storage.local.set({ageInput: ""});
chrome.storage.local.set({question1input: ""});
chrome.storage.local.set({question2input: ""});
chrome.storage.local.set({question3input: ""});
chrome.storage.local.set({question4input: ""});

chrome.storage.local.set({pcLaptopWorkButtons: ""});
chrome.storage.local.set({pcLaptopPrivateButtons: ""});
chrome.storage.local.set({smartphoneWorkButtons: ""});
chrome.storage.local.set({smartphonePrivateButtons: ""});
chrome.storage.local.set({radioKnowledgeButtons: ""});
chrome.storage.local.set({radioInternetUsageButtons: ""});
chrome.storage.local.set({radioVeranstaltungsportaleButtons: ""});
chrome.storage.local.set({radioSingleVeranstaltungsportaleButtons: ""});

//System Usability Sacle Questionnaire
chrome.storage.local.set({sus1: ""});
chrome.storage.local.set({sus2: ""});
chrome.storage.local.set({sus3: ""});
chrome.storage.local.set({sus4: ""});
chrome.storage.local.set({sus5: ""});
chrome.storage.local.set({sus6: ""});
chrome.storage.local.set({sus7: ""});
chrome.storage.local.set({sus8: ""});
chrome.storage.local.set({sus9: ""});
chrome.storage.local.set({sus10: ""});
