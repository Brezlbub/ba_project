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
      task6commentValue, task6url, task1urlArray, task2urlArray, task3urlArray,
      task4urlArray, task5urlArray, task6urlArray, task1commentArray, task2commentArray, task3commentArray,
      task4commentArray, task5commentArray, task6commentArray;
      currentState = result.state;

      if(currentState == ChromeExtensionURUT.Config.task1){
        chrome.storage.sync.get(['commentsTask1'], function(result){
          var task1commentArray = result.commentsTask1;
          var task1commentValue = comment.value;
          comment.value = "";
          task1commentArray.push(task1commentValue);
          chrome.storage.sync.set({commentsTask1: task1commentArray});
          chrome.storage.sync.get(['commentsTask1'], function(result){
            console.log(result.commentsTask1);
          });

        });
        chrome.storage.sync.get(['urlsTask1'], function(result){
          var task1urlArray = result.urlsTask1;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task1url = currentTab.url;
            task1urlArray.push(task1url);
            chrome.storage.sync.set({urlsTask1: task1urlArray});
            chrome.storage.sync.get(['urlsTask1'], function(result){
              console.log(result.urlsTask1);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task2){
        chrome.storage.sync.get(['commentsTask2'], function(result){
          var task2commentArray = result.commentsTask2;
          var task2commentValue = comment.value;
          comment.value = "";
          task2commentArray.push(task2commentValue);
          chrome.storage.sync.set({commentsTask2: task2commentArray});
          chrome.storage.sync.get(['commentsTask2'], function(result){
            console.log(result.commentsTask2);
          });
        });
        chrome.storage.sync.get(['urlsTask2'], function(result){
          var task2urlArray = result.urlsTask2;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task2url = currentTab.url;
            task2urlArray.push(task2url);
            chrome.storage.sync.set({urlsTask2: task2urlArray});
            chrome.storage.sync.get(['urlsTask2'], function(result){
              console.log(result.urlsTask2);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task3){
        chrome.storage.sync.get(['commentsTask3'], function(result){
          var task3commentArray = result.commentsTask3;
          var task3commentValue = comment.value;
          comment.value = "";
          task3commentArray.push(task3commentValue);
          chrome.storage.sync.set({commentsTask3: task3commentArray});
          chrome.storage.sync.get(['commentsTask3'], function(result){
            console.log(result.commentsTask3);
          });
        });
        chrome.storage.sync.get(['urlsTask3'], function(result){
          var task3urlArray = result.urlsTask3;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task3url = currentTab.url;
            task3urlArray.push(task3url);
            chrome.storage.sync.set({urlsTask3: task3urlArray});
            chrome.storage.sync.get(['urlsTask3'], function(result){
              console.log(result.urlsTask3);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task4){
        chrome.storage.sync.get(['commentsTask4'], function(result){
          var task4commentArray = result.commentsTask4;
          var task4commentValue = comment.value;
          comment.value = "";
          task4commentArray.push(task4commentValue);
          chrome.storage.sync.set({commentsTask4: task4commentArray});
          chrome.storage.sync.get(['commentsTask4'], function(result){
            console.log(result.commentsTask4);
          });
        });
        chrome.storage.sync.get(['urlsTask4'], function(result){
          var task4urlArray = result.urlsTask4;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task4url = currentTab.url;
            task4urlArray.push(task4url);
            chrome.storage.sync.set({urlsTask4: task4urlArray});
            chrome.storage.sync.get(['urlsTask4'], function(result){
              console.log(result.urlsTask4);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task5){
        chrome.storage.sync.get(['commentsTask5'], function(result){
          var task5commentArray = result.commentsTask5;
          var task5commentValue = comment.value;
          comment.value = "";
          task5commentArray.push(task5commentValue);
          chrome.storage.sync.set({commentsTask5: task5commentArray});
          chrome.storage.sync.get(['commentsTask5'], function(result){
            console.log(result.commentsTask5);
          });
        });
        chrome.storage.sync.get(['urlsTask5'], function(result){
          var task5urlArray = result.urlsTask5;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task5url = currentTab.url;
            task5urlArray.push(task5url);
            chrome.storage.sync.set({urlsTask5: task5urlArray});
            chrome.storage.sync.get(['urlsTask5'], function(result){
              console.log(result.urlsTask5);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task6){
        chrome.storage.sync.get(['commentsTask6'], function(result){
          var task6commentArray = result.commentsTask6;
          var task6commentValue = comment.value;
          comment.value = "";
          task6commentArray.push(task6commentValue);
          chrome.storage.sync.set({commentsTask6: task6commentArray});
          chrome.storage.sync.get(['commentsTask6'], function(result){
            console.log(result.commentsTask6);
          });
        });
        chrome.storage.sync.get(['urlsTask6'], function(result){
          var task6urlArray = result.urlsTask6;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task6url = currentTab.url;
            task6urlArray.push(task6url);
            chrome.storage.sync.set({urlsTask6: task6urlArray});
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
