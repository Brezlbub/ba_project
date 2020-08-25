var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.PreSurveyController = function() {
  "use strict";

  var that = new EventTarget(),
    finishButton,
    genderButtons,
    pcLaptopWorkButtons,
    pcLaptopPrivateButtons,
    radioKnowledgeButtons,
    radioInternetUsageButtons,
    radioVeranstaltungsportaleButtons,
    ageInput,
    question1input,
    question2input,
    question3input,
    question4input;

  /*************************** public functions *******************************/
  function init() {
    genderButtons = document.getElementsByClassName("genderButton");
    pcLaptopWorkButtons = document.getElementsByClassName("pcLaptopWorkButtons");
    pcLaptopPrivateButtons = document.getElementsByClassName("pcLaptopPrivateButtons");
    radioKnowledgeButtons = document.getElementsByClassName("radioKnowledgeButtons");
    radioInternetUsageButtons = document.getElementsByClassName("radioInternetUsageButtons");
    radioVeranstaltungsportaleButtons = document.getElementsByClassName("radioVeranstaltungsportaleButtons");
    finishButton = document.getElementById("finish-vorabfragebogen-button");

    ageInput = document.getElementById("age-input");
    question1input = document.getElementById("question-1");
    question2input = document.getElementById("question-2");
    question3input = document.getElementById("question-3");
    question4input = document.getElementById("question-4");

    setOnClickListeners();
    setInputListeners();
    loadSavedPreSurveyStates();
    getSavedInputs();
    return that;
  }



  function getSavedInputs(){
    chrome.storage.local.get(['ageInput'], function(result){
        ageInput.value = result.ageInput;
      });
    chrome.storage.local.get(['question1input'], function(result){
        question1input.value = result.question1input;
      });
    chrome.storage.local.get(['question2input'], function(result){
        question2input.value = result.question2input;
      });
    chrome.storage.local.get(['question3input'], function(result){
        question3input.value = result.question3input;
      });
    chrome.storage.local.get(['question4input'], function(result){
        question4input.value = result.question4input;
      });
  }

  function loadSavedPreSurveyStates(){
    chrome.storage.local.get(['genderButton'], function(result){
      for(var i = 0; i < genderButtons.length; i++){
      if(genderButtons[i].value == result.genderButton){
        genderButtons[i].checked = true;}}});

    chrome.storage.local.get(['pcLaptopWorkButtons'], function(result){
      for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      if(pcLaptopWorkButtons[i].value == result.pcLaptopWorkButtons){
        pcLaptopWorkButtons[i].checked = true;}}});

    chrome.storage.local.get(['pcLaptopPrivateButtons'], function(result){
      for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      if(pcLaptopPrivateButtons[i].value == result.pcLaptopPrivateButtons){
        pcLaptopPrivateButtons[i].checked = true;}}});

    chrome.storage.local.get(['radioKnowledgeButtons'], function(result){
      for(var i = 0; i < radioKnowledgeButtons.length; i++){
      if(radioKnowledgeButtons[i].value == result.radioKnowledgeButtons){
        radioKnowledgeButtons[i].checked = true;}}});

    chrome.storage.local.get(['radioInternetUsageButtons'], function(result){
      for(var i = 0; i < radioInternetUsageButtons.length; i++){
      if(radioInternetUsageButtons[i].value == result.radioInternetUsageButtons){
        radioInternetUsageButtons[i].checked = true;}}});

    chrome.storage.local.get(['radioVeranstaltungsportaleButtons'], function(result){
      for(var i = 0; i < radioVeranstaltungsportaleButtons.length; i++){
      if(radioVeranstaltungsportaleButtons[i].value == result.radioVeranstaltungsportaleButtons){
        radioVeranstaltungsportaleButtons[i].checked = true;}}});

  }

  function setInputListeners(){
    ageInput.addEventListener('input', ageInputEntered);
    question1input.addEventListener('input', question1inputEntered);
    question2input.addEventListener('input', question2inputEntered);
    question3input.addEventListener('input', question3inputEntered);
    question4input.addEventListener('input', question4inputEntered);
  }

  function setOnClickListeners(){
    finishButton.addEventListener('click', checkForCorrectInputs);
    for(var i = 0; i < genderButtons.length; i++){
      genderButtons[i].addEventListener('click', genderButtonClicked);
    }
    for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      pcLaptopWorkButtons[i].addEventListener('click', pcLaptopWorkButtonsClicked);
    }
    for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      pcLaptopPrivateButtons[i].addEventListener('click', pcLaptopPrivateButtonsClicked);
    }
    for(var i = 0; i < radioKnowledgeButtons.length; i++){
      radioKnowledgeButtons[i].addEventListener('click', radioKnowledgeButtonsClicked);
    }
    for(var i = 0; i < radioInternetUsageButtons.length; i++){
      radioInternetUsageButtons[i].addEventListener('click', radioInternetUsageButtonsClicked);
    }
    for(var i = 0; i < radioVeranstaltungsportaleButtons.length; i++){
      radioVeranstaltungsportaleButtons[i].addEventListener('click', radioVeranstaltungsportaleButtonsClicked);
    }
  }

  function checkForCorrectInputs(){
    if( wasInputEntered(ageInput) &&
        wasInputEntered(question1input) && wasInputEntered(question2input) && wasInputEntered(question3input) &&
        wasInputEntered(question4input) && wasButtonPressed(genderButtons) && wasButtonPressed(pcLaptopPrivateButtons) &&
          wasButtonPressed(pcLaptopWorkButtons) && wasButtonPressed(radioKnowledgeButtons) && wasButtonPressed(radioVeranstaltungsportaleButtons)){
            dispatchOnCorrectInputsEvent(true);
    }else{
      dispatchOnCorrectInputsEvent(false);
    }
  }

  function wasInputEntered(inputField){
    if(inputField.value != ""){
      return true;
    }else{
      return false;
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

  function genderButtonClicked(){
    for(var i = 0; i < genderButtons.length; i++){
      if(genderButtons[i].checked == true){
        chrome.storage.local.set({genderButton: genderButtons[i].value});}}
  }

  function pcLaptopWorkButtonsClicked(){
    for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      if(pcLaptopWorkButtons[i].checked == true){
        chrome.storage.local.set({pcLaptopWorkButtons: pcLaptopWorkButtons[i].value});}}
  }

  function pcLaptopPrivateButtonsClicked(){
    for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      if(pcLaptopPrivateButtons[i].checked == true){
        chrome.storage.local.set({pcLaptopPrivateButtons: pcLaptopPrivateButtons[i].value});}}
  }

  function radioKnowledgeButtonsClicked(){
    for(var i = 0; i < radioKnowledgeButtons.length; i++){
      if(radioKnowledgeButtons[i].checked == true){
        chrome.storage.local.set({radioKnowledgeButtons: radioKnowledgeButtons[i].value});}}
  }

  function radioInternetUsageButtonsClicked(){
    for(var i = 0; i < radioInternetUsageButtons.length; i++){
      if(radioInternetUsageButtons[i].checked == true){
        chrome.storage.local.set({radioInternetUsageButtons: radioInternetUsageButtons[i].value});}}
  }

  function radioVeranstaltungsportaleButtonsClicked(){
    for(var i = 0; i < radioVeranstaltungsportaleButtons.length; i++){
      if(radioVeranstaltungsportaleButtons[i].checked == true){
        chrome.storage.local.set({radioVeranstaltungsportaleButtons: radioVeranstaltungsportaleButtons[i].value});}}
  }


  function ageInputEntered(){
    chrome.storage.local.set({ageInput: ageInput.value});
  }

  function question1inputEntered(){
    chrome.storage.local.set({question1input: question1input.value});
  }

  function question2inputEntered(){
    chrome.storage.local.set({question2input: question2input.value});
  }

  function question3inputEntered(){
    chrome.storage.local.set({question3input: question3input.value});
  }

  function question4inputEntered(){
    chrome.storage.local.set({question4input: question4input.value});
  }

  function dispatchOnCorrectInputsEvent(isCorrect){
    let onCorrectInputsEvent = new Event("onCorrectInputs");
    onCorrectInputsEvent.isCorrect = isCorrect;
    that.dispatchEvent(onCorrectInputsEvent);
  }

  that.init = init;
  return that;
};
