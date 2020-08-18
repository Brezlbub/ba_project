
chrome.storage.sync.set({state: 0});
//task not running = 0, task running = 1, task finished = 2, task failed 3
chrome.storage.sync.set({taskRunning: 0});
chrome.storage.sync.set({startTime: 0});
chrome.storage.sync.set({timeDifference: 0});
//inititally set true = 1
chrome.storage.sync.set({stopButtonDisableState: 1});

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
