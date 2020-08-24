var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.SUSController = function() {
  "use strict";

  var that = new EventTarget(),
    sus1Buttons,
    sus2Buttons,
    sus3Buttons,
    sus4Buttons,
    sus5Buttons,
    sus6Buttons,
    sus7Buttons,
    sus8Buttons,
    sus9Buttons,
    sus10Buttons,
    finishSUSbutton;

  /*************************** public functions *******************************/
  function init() {
    finishSUSbutton = document.getElementById("finish-sus-button");
    sus1Buttons = document.getElementsByClassName("sus-1");
    sus2Buttons = document.getElementsByClassName("sus-2");
    sus3Buttons = document.getElementsByClassName("sus-3");
    sus4Buttons = document.getElementsByClassName("sus-4");
    sus5Buttons = document.getElementsByClassName("sus-5");
    sus6Buttons = document.getElementsByClassName("sus-6");
    sus7Buttons = document.getElementsByClassName("sus-7");
    sus8Buttons = document.getElementsByClassName("sus-8");
    sus9Buttons = document.getElementsByClassName("sus-9");
    sus10Buttons = document.getElementsByClassName("sus-10");
    setOnClickListeners();
    loadSavedSUSStates();
    return that;
  }

  function loadSavedSUSStates(){
    chrome.storage.local.get(['sus1'], function(result){
      for(var i = 0; i < sus1Buttons.length; i++){
      if(sus1Buttons[i].value == result.sus1){
        sus1Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus2'], function(result){
      for(var i = 0; i < sus2Buttons.length; i++){
      if(sus2Buttons[i].value == result.sus2){
        sus2Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus3'], function(result){
      for(var i = 0; i < sus3Buttons.length; i++){
      if(sus3Buttons[i].value == result.sus3){
        sus3Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus4'], function(result){
      for(var i = 0; i < sus4Buttons.length; i++){
      if(sus4Buttons[i].value == result.sus4){
        sus4Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus5'], function(result){
      for(var i = 0; i < sus5Buttons.length; i++){
      if(sus5Buttons[i].value == result.sus5){
        sus5Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus6'], function(result){
      for(var i = 0; i < sus6Buttons.length; i++){
      if(sus6Buttons[i].value == result.sus6){
        sus6Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus7'], function(result){
      for(var i = 0; i < sus7Buttons.length; i++){
      if(sus7Buttons[i].value == result.sus7){
        sus7Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus8'], function(result){
      for(var i = 0; i < sus8Buttons.length; i++){
      if(sus8Buttons[i].value == result.sus8){
        sus8Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus9'], function(result){
      for(var i = 0; i < sus9Buttons.length; i++){
      if(sus9Buttons[i].value == result.sus9){
        sus9Buttons[i].checked = true;}}});

    chrome.storage.local.get(['sus10'], function(result){
      for(var i = 0; i < sus10Buttons.length; i++){
      if(sus10Buttons[i].value == result.sus10){
        sus10Buttons[i].checked = true;}}});
  }

  function setOnClickListeners(){
    finishSUSbutton.addEventListener('click', checkForCorrectInputs);
    for(var i = 0; i < sus1Buttons.length; i++){
      sus1Buttons[i].addEventListener('click', sus1ButtonsClicked);
    }
    for(var i = 0; i < sus2Buttons.length; i++){
      sus2Buttons[i].addEventListener('click', sus2ButtonsClicked);
    }
    for(var i = 0; i < sus3Buttons.length; i++){
      sus3Buttons[i].addEventListener('click', sus3ButtonsClicked);
    }
    for(var i = 0; i < sus4Buttons.length; i++){
      sus4Buttons[i].addEventListener('click', sus4ButtonsClicked);
    }
    for(var i = 0; i < sus5Buttons.length; i++){
      sus5Buttons[i].addEventListener('click', sus5ButtonsClicked);
    }
    for(var i = 0; i < sus6Buttons.length; i++){
      sus6Buttons[i].addEventListener('click', sus6ButtonsClicked);
    }
    for(var i = 0; i < sus7Buttons.length; i++){
      sus7Buttons[i].addEventListener('click', sus7ButtonsClicked);
    }
    for(var i = 0; i < sus8Buttons.length; i++){
      sus8Buttons[i].addEventListener('click', sus8ButtonsClicked);
    }
    for(var i = 0; i < sus9Buttons.length; i++){
      sus9Buttons[i].addEventListener('click', sus9ButtonsClicked);
    }
    for(var i = 0; i < sus10Buttons.length; i++){
      sus10Buttons[i].addEventListener('click', sus10ButtonsClicked);
    }
  }

  function checkForCorrectInputs(){
    if(wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons) &&
      wasButtonPressed(sus1Buttons)){
      dispatchOnCorrectInputsEvent(true);
    }else{
      dispatchOnCorrectInputsEvent(false);
    }
  }

  function wasButtonPressed(array){
    var result = true;
    for(var i = 0; i < array.length; i++){
      if(array[i].checked){
        return true;
      }else{
        result = false;
    }
    }
    return result;
  }

  function sus1ButtonsClicked(){
    for(var i = 0; i < sus1Buttons.length; i++){
      if(sus1Buttons[i].checked == true){
        chrome.storage.local.set({sus1: sus1Buttons[i].value});}}
  }

  function sus2ButtonsClicked(){
    for(var i = 0; i < sus2Buttons.length; i++){
      if(sus2Buttons[i].checked == true){
        chrome.storage.local.set({sus2: sus2Buttons[i].value});}}
  }

  function sus3ButtonsClicked(){
    for(var i = 0; i < sus3Buttons.length; i++){
      if(sus3Buttons[i].checked == true){
        chrome.storage.local.set({sus3: sus3Buttons[i].value});}}
  }

  function sus4ButtonsClicked(){
    for(var i = 0; i < sus4Buttons.length; i++){
      if(sus4Buttons[i].checked == true){
        chrome.storage.local.set({sus4: sus4Buttons[i].value});}}
  }

  function sus5ButtonsClicked(){
    for(var i = 0; i < sus5Buttons.length; i++){
      if(sus5Buttons[i].checked == true){
        chrome.storage.local.set({sus5: sus5Buttons[i].value});}}
  }

  function sus6ButtonsClicked(){
    for(var i = 0; i < sus6Buttons.length; i++){
      if(sus6Buttons[i].checked == true){
        chrome.storage.local.set({sus6: sus6Buttons[i].value});}}
  }

  function sus7ButtonsClicked(){
    for(var i = 0; i < sus7Buttons.length; i++){
      if(sus7Buttons[i].checked == true){
        chrome.storage.local.set({sus7: sus7Buttons[i].value});}}
  }

  function sus8ButtonsClicked(){
    for(var i = 0; i < sus8Buttons.length; i++){
      if(sus8Buttons[i].checked == true){
        chrome.storage.local.set({sus8: sus8Buttons[i].value});}}
  }

  function sus9ButtonsClicked(){
    for(var i = 0; i < sus9Buttons.length; i++){
      if(sus9Buttons[i].checked == true){
        chrome.storage.local.set({sus9: sus9Buttons[i].value});}}
  }

  function sus10ButtonsClicked(){
    for(var i = 0; i < sus10Buttons.length; i++){
      if(sus10Buttons[i].checked == true){
        chrome.storage.local.set({sus10: sus10Buttons[i].value});}}
  }

  function dispatchOnCorrectInputsEvent(isCorrect){
    let onCorrectInputsEvent = new Event("onCorrectInputs");
    onCorrectInputsEvent.isCorrect = isCorrect;
    that.dispatchEvent(onCorrectInputsEvent);
  }

  that.init = init;
  return that;
};
