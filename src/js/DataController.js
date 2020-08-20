var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.DataController = function() {
  "use strict";

  var that = new EventTarget(),
    submitCommentButton,
    comment;

  /*************************** public functions *******************************/
  function init() {
    submitCommentButton = document.getElementById("submit-comment-button");
    submitCommentButton.addEventListener('click', storeCommentData);
    comment = document.getElementById("comment");

    return that;
  }

  function storeCommentData(){
    chrome.storage.sync.get(['state'], function(result){
      var currentState, task1commentValue,
      task1url, task2commentValue, task2url, task3commentValue,
      task3url, task4commentValue, task4url, task5commentValue, task5url,
      task6commentValue, task6url;
      currentState = result.state;
      if(currentState = ChromeExtensionURUT.Config.task1){
        chrome.storage.sync.get(['commentsTask1'], function(result){
          var task1commentArray = result.commentsTask1;
          task1commentValue = comment.value;
          comment.value = "";
          task1commentArray.push(task1commentValue);
          chrome.storage.sync.set({commentsTask1: task1commentArray});
          chrome.storage.sync.get(['commentsTask1'], function(result){
            console.log(result.commentsTask1);
          });

        });
        chrome.storage.sync.get(['urlsTask1'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask1;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask1: urlArray});
            chrome.storage.sync.get(['urlsTask1'], function(result){
              console.log(result.urlsTask1);
            });
          });
        });
      }
      if(currentState = ChromeExtensionURUT.Config.task2){
        chrome.storage.sync.get(['commentsTask2'], function(result){
          var commentArray = result.commentsTask2;
          commentValue = comment.value;
          comment.value = "";
          commentArray.push(commentValue);
          chrome.storage.sync.set({commentsTask2: commentArray});
          chrome.storage.sync.get(['commentsTask2'], function(result){
            console.log(result.commentsTask2);
          });
        });
        chrome.storage.sync.get(['urlsTask2'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask2;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask2: urlArray});
            chrome.storage.sync.get(['urlsTask2'], function(result){
              console.log(result.urlsTask2);
            });
          });
        });
      }
      if(currentState = ChromeExtensionURUT.Config.task3){
        chrome.storage.sync.get(['commentsTask3'], function(result){
          var commentArray = result.commentsTask3;
          commentValue = comment.value;
          comment.value = "";
          commentArray.push(commentValue);
          chrome.storage.sync.set({commentsTask3: commentArray});
          chrome.storage.sync.get(['commentsTask3'], function(result){
            console.log(result.commentsTask3);
          });
        });
        chrome.storage.sync.get(['urlsTask3'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask3;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask3: urlArray});
            chrome.storage.sync.get(['urlsTask3'], function(result){
              console.log(result.urlsTask3);
            });
          });
        });
      }
      if(currentState = ChromeExtensionURUT.Config.task4){
        chrome.storage.sync.get(['commentsTask4'], function(result){
          var commentArray = result.commentsTask4;
          commentValue = comment.value;
          comment.value = "";
          commentArray.push(commentValue);
          chrome.storage.sync.set({commentsTask4: commentArray});
          chrome.storage.sync.get(['commentsTask4'], function(result){
            console.log(result.commentsTask4);
          });
        });
        chrome.storage.sync.get(['urlsTask4'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask4;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask4: urlArray});
            chrome.storage.sync.get(['urlsTask4'], function(result){
              console.log(result.urlsTask4);
            });
          });
        });
      }
      if(currentState = ChromeExtensionURUT.Config.task5){
        chrome.storage.sync.get(['commentsTask5'], function(result){
          var commentArray = result.commentsTask5;
          commentValue = comment.value;
          comment.value = "";
          commentArray.push(commentValue);
          chrome.storage.sync.set({commentsTask5: commentArray});
          chrome.storage.sync.get(['commentsTask5'], function(result){
            console.log(result.commentsTask5);
          });
        });
        chrome.storage.sync.get(['urlsTask5'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask5;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask5: urlArray});
            chrome.storage.sync.get(['urlsTask5'], function(result){
              console.log(result.urlsTask5);
            });
          });
        });
      }
      if(currentState = ChromeExtensionURUT.Config.task6){
        chrome.storage.sync.get(['commentsTask6'], function(result){
          var commentArray = result.commentsTask6;
          commentValue = comment.value;
          comment.value = "";
          commentArray.push(commentValue);
          chrome.storage.sync.set({commentsTask6: commentArray});
          chrome.storage.sync.get(['commentsTask6'], function(result){
            console.log(result.commentsTask6);
          });
        });
        chrome.storage.sync.get(['urlsTask6'], function(result){
          var urlArray, query, url;
          urlArray = result.urlsTask6;
          query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            url = currentTab.url;
            urlArray.push(url);
            chrome.storage.sync.set({urlsTask6: urlArray});
            chrome.storage.sync.get(['urlsTask6'], function(result){
              console.log(result.urlsTask6);
            });
          });
        });
      }
      });
  }


  /*************************** event functions ********************************/

  /*function dispatchSaveDataEvent() {
    let saveDataEvent = new Event("onDataSaved");
    saveDataEvent.taskTimeInSeconds = passedSeconds;
    that.dispatchEvent(saveDataEvent);
  }*/

  that.init = init;
  return that;
};
