
chrome.storage.local.set({state: 0});
chrome.storage.local.set({taskRunning: 0});
chrome.storage.local.set({startTime: 0});
chrome.storage.local.set({timeDifference: 0});

/*chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  //send msg as object
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
}*/
//set the state of the test: 0 = start