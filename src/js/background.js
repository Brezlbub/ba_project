
chrome.storage.sync.set({state: 0});
//task window but not started = 0, task running = 1, task finished = 2, task failed 3
chrome.storage.sync.set({taskRunning: 0});
chrome.storage.sync.set({startTime: 0});
chrome.storage.sync.set({timeDifference: 0});


//Vorabfragebogen
//0 = survey not finished, 1 = survey finished
chrome.storage.sync.set({surveyFinished: 0});
chrome.storage.sync.set({ageInput: ""});
chrome.storage.sync.set({educationInput: ""});
chrome.storage.sync.set({professionInput: ""});
chrome.storage.sync.set({question1input: ""});
chrome.storage.sync.set({question2input: ""});
chrome.storage.sync.set({question3input: ""});
chrome.storage.sync.set({question4input: ""});

chrome.storage.sync.set({genderButton: ""});
chrome.storage.sync.set({pcLaptopWorkButtons: ""});
chrome.storage.sync.set({pcLaptopPrivateButtons: ""});
chrome.storage.sync.set({smartphoneWorkButtons: ""});
chrome.storage.sync.set({smartphonePrivateButtons: ""});
chrome.storage.sync.set({radioKnowledgeButtons: ""});
chrome.storage.sync.set({radioInternetUsageButtons: ""});
chrome.storage.sync.set({radioVeranstaltungsportaleButtons: ""});
chrome.storage.sync.set({radioSingleVeranstaltungsportaleButtons: ""});



//sync
/*chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    alert(tab.url);
});
/*chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  //send msg as object
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}*/
//set the state of the test: 0 = start
