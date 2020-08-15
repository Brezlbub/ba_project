/*
//receive messages from background.js
chrome.runtime.onMessage.addListener(gotMessage);

//stuff thats being send is inside message
function gotMessage(message, sender, sendRespone) {
  if(message.txt === "hello"){
    let body = document.querySelector('body');
    console.log(body);
    body.style['background-color'] = 'green';
  }
}*/
