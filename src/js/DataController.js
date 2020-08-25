var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.DataController = function() {
  "use strict";

  var that = new EventTarget(),
    submitCommentButton,
    submitFailureCommentButton,
    describeCommentButton,
    describeComment,
    failureComment,
    comment,
    jsonDownloader;

  /*************************** public functions *******************************/
  function init() {
    comment = document.getElementById("comment");
    failureComment = document.getElementById("failure-comment");
    describeComment = document.getElementById("describe-comment");
    submitCommentButton = document.getElementById("submit-comment-button");
    describeCommentButton = document.getElementById("describe-comment-button");
    submitFailureCommentButton = document.getElementById("submit-failure-comment-button");

    comment.addEventListener('keydown', storeCurrentComment);
    failureComment.addEventListener('keydown', storeCurrentComment);
    describeComment.addEventListener('keydown', storeCurrentComment);
    submitCommentButton.addEventListener('click', storeCommentData);
    describeCommentButton.addEventListener('click', storeDescribeCommentData);
    submitFailureCommentButton.addEventListener('click', storeFailureCommentData);
    return that;
  }

  function storeCurrentComment(){
    chrome.storage.local.get(['state'], function(result){
      var currentState;
      currentState = result.state;
      if(currentState == ChromeExtensionURUT.Config.describe1 || currentState == ChromeExtensionURUT.Config.describe2 || currentState == ChromeExtensionURUT.Config.describe3){
        chrome.storage.local.set({currentComment: describeComment.value});
      }
      if(currentState == ChromeExtensionURUT.Config.task1 || currentState == ChromeExtensionURUT.Config.task2 || currentState == ChromeExtensionURUT.Config.task3 || currentState == ChromeExtensionURUT.Config.task4 || currentState == ChromeExtensionURUT.Config.task5 || currentState == ChromeExtensionURUT.Config.task6){
        chrome.storage.local.get(['taskRunning'], function(result){
          if(result.taskRunning == ChromeExtensionURUT.Config.taskIsRunning){
            chrome.storage.local.set({currentComment: comment.value});
          }else if(result.taskRunning == ChromeExtensionURUT.Config.taskFailed){
            chrome.storage.local.set({currentComment: failureComment.value});
          }
          });
      }
      });
      chrome.storage.local.get(['currentComment'], function(result){
        console.log(result.currentComment);
        });
  }

  function storeDescribeCommentData() {
    chrome.storage.local.get(['state'], function(result){
      var currentState, describe1comment, describe2comment, describe3comment;
      currentState = result.state;
      if(currentState == ChromeExtensionURUT.Config.describe1){
        describe1comment = describeComment.value;
        describeComment.value = "";
        chrome.storage.local.set({beschreibung1: describe1comment});
      }
      if(currentState == ChromeExtensionURUT.Config.describe2){
        describe2comment = describeComment.value;
        describeComment.value = "";
        chrome.storage.local.set({beschreibung2: describe2comment});
      }
      if(currentState == ChromeExtensionURUT.Config.describe3){
        describe3comment = describeComment.value;
        describeComment.value = "";
        chrome.storage.local.set({beschreibung3: describe3comment});
      }
      });
      chrome.storage.local.set({currentComment: ""});
  }

  function storeFailureCommentData() {
    chrome.storage.local.get(['state'], function(result){
      var currentState, task1FailureComment, task2FailureComment, task3FailureComment,
      task4FailureComment, task5FailureComment, task6FailureComment,
      currentState = result.state;
      if(currentState == ChromeExtensionURUT.Config.task1){
        task1FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task1FailureComment: task1FailureComment});
      }
      if(currentState == ChromeExtensionURUT.Config.task2){
        task2FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task2FailureComment: task2FailureComment});
      }
      if(currentState == ChromeExtensionURUT.Config.task3){
        task3FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task3FailureComment: task3FailureComment});
      }
      if(currentState == ChromeExtensionURUT.Config.task4){
        task4FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task4FailureComment: task4FailureComment});
      }
      if(currentState == ChromeExtensionURUT.Config.task5){
        task5FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task5FailureComment: task5FailureComment});
      }
      if(currentState == ChromeExtensionURUT.Config.task6){
        task6FailureComment = failureComment.value;
        failureComment.value = "";
        chrome.storage.local.set({task6FailureComment: task6FailureComment});
      }
      });
      chrome.storage.local.set({currentComment: ""});
  }

  function storeCommentData(){
    chrome.storage.local.get(['state'], function(result){
      var currentState, task1commentValue,
      task1url, task2commentValue, task2url, task3commentValue,
      task3url, task4commentValue, task4url, task5commentValue, task5url,
      task6commentValue, task6url, task1urlArray, task2urlArray, task3urlArray,
      task4urlArray, task5urlArray, task6urlArray, task1commentArray, task2commentArray, task3commentArray,
      task4commentArray, task5commentArray, task6commentArray;
      currentState = result.state;

      if(currentState == ChromeExtensionURUT.Config.task1){
        chrome.storage.local.get(['commentsTask1'], function(result){
          var task1commentArray = result.commentsTask1;
          var task1commentValue = comment.value;
          comment.value = "";
          task1commentArray.push(task1commentValue);
          chrome.storage.local.set({commentsTask1: task1commentArray});
          chrome.storage.local.get(['commentsTask1'], function(result){
            console.log(result.commentsTask1);
          });

        });
        chrome.storage.local.get(['urlsTask1'], function(result){
          var task1urlArray = result.urlsTask1;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task1url = currentTab.url;
            task1urlArray.push(task1url);
            chrome.storage.local.set({urlsTask1: task1urlArray});
            chrome.storage.local.get(['urlsTask1'], function(result){
              console.log(result.urlsTask1);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task2){
        chrome.storage.local.get(['commentsTask2'], function(result){
          var task2commentArray = result.commentsTask2;
          var task2commentValue = comment.value;
          comment.value = "";
          task2commentArray.push(task2commentValue);
          chrome.storage.local.set({commentsTask2: task2commentArray});
          chrome.storage.local.get(['commentsTask2'], function(result){
            console.log(result.commentsTask2);
          });
        });
        chrome.storage.local.get(['urlsTask2'], function(result){
          var task2urlArray = result.urlsTask2;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task2url = currentTab.url;
            task2urlArray.push(task2url);
            chrome.storage.local.set({urlsTask2: task2urlArray});
            chrome.storage.local.get(['urlsTask2'], function(result){
              console.log(result.urlsTask2);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task3){
        chrome.storage.local.get(['commentsTask3'], function(result){
          var task3commentArray = result.commentsTask3;
          var task3commentValue = comment.value;
          comment.value = "";
          task3commentArray.push(task3commentValue);
          chrome.storage.local.set({commentsTask3: task3commentArray});
          chrome.storage.local.get(['commentsTask3'], function(result){
            console.log(result.commentsTask3);
          });
        });
        chrome.storage.local.get(['urlsTask3'], function(result){
          var task3urlArray = result.urlsTask3;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task3url = currentTab.url;
            task3urlArray.push(task3url);
            chrome.storage.local.set({urlsTask3: task3urlArray});
            chrome.storage.local.get(['urlsTask3'], function(result){
              console.log(result.urlsTask3);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task4){
        chrome.storage.local.get(['commentsTask4'], function(result){
          var task4commentArray = result.commentsTask4;
          var task4commentValue = comment.value;
          comment.value = "";
          task4commentArray.push(task4commentValue);
          chrome.storage.local.set({commentsTask4: task4commentArray});
          chrome.storage.local.get(['commentsTask4'], function(result){
            console.log(result.commentsTask4);
          });
        });
        chrome.storage.local.get(['urlsTask4'], function(result){
          var task4urlArray = result.urlsTask4;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task4url = currentTab.url;
            task4urlArray.push(task4url);
            chrome.storage.local.set({urlsTask4: task4urlArray});
            chrome.storage.local.get(['urlsTask4'], function(result){
              console.log(result.urlsTask4);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task5){
        chrome.storage.local.get(['commentsTask5'], function(result){
          var task5commentArray = result.commentsTask5;
          var task5commentValue = comment.value;
          comment.value = "";
          task5commentArray.push(task5commentValue);
          chrome.storage.local.set({commentsTask5: task5commentArray});
          chrome.storage.local.get(['commentsTask5'], function(result){
            console.log(result.commentsTask5);
          });
        });
        chrome.storage.local.get(['urlsTask5'], function(result){
          var task5urlArray = result.urlsTask5;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task5url = currentTab.url;
            task5urlArray.push(task5url);
            chrome.storage.local.set({urlsTask5: task5urlArray});
            chrome.storage.local.get(['urlsTask5'], function(result){
              console.log(result.urlsTask5);
            });
          });
        });
      }
      if(currentState == ChromeExtensionURUT.Config.task6){
        chrome.storage.local.get(['commentsTask6'], function(result){
          var task6commentArray = result.commentsTask6;
          var task6commentValue = comment.value;
          comment.value = "";
          task6commentArray.push(task6commentValue);
          chrome.storage.local.set({commentsTask6: task6commentArray});
          chrome.storage.local.get(['commentsTask6'], function(result){
            console.log(result.commentsTask6);
          });
        });
        chrome.storage.local.get(['urlsTask6'], function(result){
          var task6urlArray = result.urlsTask6;
          var query = {active: true, currentWindow: true};
          chrome.tabs.query(query, function(tabs){
            var currentTab = tabs[0];
            var task6url = currentTab.url;
            task6urlArray.push(task6url);
            chrome.storage.local.set({urlsTask6: task6urlArray});
            chrome.storage.local.get(['urlsTask6'], function(result){
              console.log(result.urlsTask6);
            });
          });
        });
      }
      });
      chrome.storage.local.set({currentComment: ""});
  }

  that.init = init;
  return that;
};
