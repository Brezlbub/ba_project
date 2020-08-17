
chrome.storage.local.set({state: 0});
chrome.storage.local.set({taskRunning: 0});
chrome.storage.local.set({startTime: 0});
chrome.storage.local.set({timeDifference: 0});

//https://stackoverflow.com/questions/13359421/chrome-extension-get-current-tab-from-popup
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
