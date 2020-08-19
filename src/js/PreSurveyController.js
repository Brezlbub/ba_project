var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.PreSurveyController = function() {
  "use strict";

  var that = new EventTarget(),
    genderButtons,
    pcLaptopWorkButtons,
    pcLaptopPrivateButtons,
    smartphoneWorkButtons,
    smartphonePrivateButtons,
    radioKnowledgeButtons,
    radioInternetUsageButtons,
    radioVeranstaltungsportaleButtons,
    radioSingleVeranstaltungsportaleButtons,
    ageInput,
    educationInput,
    professionInput,
    question1input,
    question2input,
    question3input,
    question4input;

  /*************************** public functions *******************************/
  function init() {
    genderButtons = document.getElementsByClassName("genderButton");
    pcLaptopWorkButtons = document.getElementsByClassName("pcLaptopWorkButtons");
    pcLaptopPrivateButtons = document.getElementsByClassName("pcLaptopPrivateButtons");
    smartphoneWorkButtons = document.getElementsByClassName("smartphoneWorkButtons");
    smartphonePrivateButtons = document.getElementsByClassName("smartphonePrivateButtons");
    radioKnowledgeButtons = document.getElementsByClassName("radioKnowledgeButtons");
    radioInternetUsageButtons = document.getElementsByClassName("radioInternetUsageButtons");
    radioVeranstaltungsportaleButtons = document.getElementsByClassName("radioVeranstaltungsportaleButtons");
    radioSingleVeranstaltungsportaleButtons = document.getElementsByClassName("radioSingleVeranstaltungsportaleButtons");

    ageInput = document.getElementById("age-input");
    educationInput = document.getElementById("education-input");
    professionInput = document.getElementById("profession-input");
    question1input = document.getElementById("question-1");
    question2input = document.getElementById("question-2");
    question3input = document.getElementById("question-3");
    question4input = document.getElementById("question-4");
    setOnClickListeners();
    setInputListeners();
    loadSavedPreSurveyStates();
    getSavedInputs(ageInput);
    return that;
  }

  function getSavedInputs(){
    chrome.storage.sync.get(['ageInput'], function(result){
        ageInput.value = result.ageInput;
        console.log(result.ageInput);
      });
  }

  function loadSavedPreSurveyStates(){
    chrome.storage.sync.get(['genderButton'], function(result){
      for(var i = 0; i < genderButtons.length; i++){
      if(genderButtons[i].value == result.genderButton){
        genderButtons[i].checked = true;}}});

    chrome.storage.sync.get(['pcLaptopWorkButtons'], function(result){
      for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      if(pcLaptopWorkButtons[i].value == result.pcLaptopWorkButtons){
        pcLaptopWorkButtons[i].checked = true;}}});

    chrome.storage.sync.get(['pcLaptopPrivateButtons'], function(result){
      for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      if(pcLaptopPrivateButtons[i].value == result.pcLaptopPrivateButtons){
        pcLaptopPrivateButtons[i].checked = true;}}});

    chrome.storage.sync.get(['smartphoneWorkButtons'], function(result){
      for(var i = 0; i < smartphoneWorkButtons.length; i++){
      if(smartphoneWorkButtons[i].value == result.smartphoneWorkButtons){
        smartphoneWorkButtons[i].checked = true;}}});

    chrome.storage.sync.get(['smartphonePrivateButtons'], function(result){
      for(var i = 0; i < smartphonePrivateButtons.length; i++){
      if(smartphonePrivateButtons[i].value == result.smartphonePrivateButtons){
        smartphonePrivateButtons[i].checked = true;}}});

    chrome.storage.sync.get(['radioKnowledgeButtons'], function(result){
      for(var i = 0; i < radioKnowledgeButtons.length; i++){
      if(radioKnowledgeButtons[i].value == result.radioKnowledgeButtons){
        radioKnowledgeButtons[i].checked = true;}}});

    chrome.storage.sync.get(['radioInternetUsageButtons'], function(result){
      for(var i = 0; i < radioInternetUsageButtons.length; i++){
      if(radioInternetUsageButtons[i].value == result.radioInternetUsageButtons){
        radioInternetUsageButtons[i].checked = true;}}});

    chrome.storage.sync.get(['radioVeranstaltungsportaleButtons'], function(result){
      for(var i = 0; i < radioVeranstaltungsportaleButtons.length; i++){
      if(radioVeranstaltungsportaleButtons[i].value == result.radioVeranstaltungsportaleButtons){
        radioVeranstaltungsportaleButtons[i].checked = true;}}});

    chrome.storage.sync.get(['radioSingleVeranstaltungsportaleButtons'], function(result){
      for(var i = 0; i < radioSingleVeranstaltungsportaleButtons.length; i++){
      if(radioSingleVeranstaltungsportaleButtons[i].value == result.radioSingleVeranstaltungsportaleButtons){
        radioSingleVeranstaltungsportaleButtons[i].checked = true;}}});
  }

  function setInputListeners(){
    ageInput.addEventListener('input', ageInputEntered);
    educationInput.addEventListener('input', educationInputEntered);
    professionInput.addEventListener('input', professionInputEntered);
    question1input.addEventListener('input', question1inputEntered);
    question2input.addEventListener('input', question2inputEntered);
    question3input.addEventListener('input', question3inputEntered);
    question4input.addEventListener('input', question4inputEntered);
  }

  function setOnClickListeners(){
    for(var i = 0; i < genderButtons.length; i++){
      genderButtons[i].addEventListener('click', genderButtonClicked);
    }
    for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      pcLaptopWorkButtons[i].addEventListener('click', pcLaptopWorkButtonsClicked);
    }
    for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      pcLaptopPrivateButtons[i].addEventListener('click', pcLaptopPrivateButtonsClicked);
    }
    for(var i = 0; i < smartphoneWorkButtons.length; i++){
      smartphoneWorkButtons[i].addEventListener('click', smartphoneWorkButtonsClicked);
    }
    for(var i = 0; i < smartphonePrivateButtons.length; i++){
      smartphonePrivateButtons[i].addEventListener('click', smartphonePrivateButtonsClicked);
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
    for(var i = 0; i < radioSingleVeranstaltungsportaleButtons.length; i++){
      radioSingleVeranstaltungsportaleButtons[i].addEventListener('click', radioSingleVeranstaltungsportaleButtonsClicked);
    }
  }

  function genderButtonClicked(){
    for(var i = 0; i < genderButtons.length; i++){
      if(genderButtons[i].checked == true){
        chrome.storage.sync.set({genderButton: genderButtons[i].value});}}
  }

  function pcLaptopWorkButtonsClicked(){
    for(var i = 0; i < pcLaptopWorkButtons.length; i++){
      if(pcLaptopWorkButtons[i].checked == true){
        chrome.storage.sync.set({pcLaptopWorkButtons: pcLaptopWorkButtons[i].value});}}
  }

  function pcLaptopPrivateButtonsClicked(){
    for(var i = 0; i < pcLaptopPrivateButtons.length; i++){
      if(pcLaptopPrivateButtons[i].checked == true){
        chrome.storage.sync.set({pcLaptopPrivateButtons: pcLaptopPrivateButtons[i].value});}}
  }

  function smartphoneWorkButtonsClicked(){
    for(var i = 0; i < smartphoneWorkButtons.length; i++){
      if(smartphoneWorkButtons[i].checked == true){
        chrome.storage.sync.set({smartphoneWorkButtons: smartphoneWorkButtons[i].value});}}
  }
  function smartphonePrivateButtonsClicked(){
    for(var i = 0; i < smartphonePrivateButtons.length; i++){
      if(smartphonePrivateButtons[i].checked == true){
        chrome.storage.sync.set({smartphonePrivateButtons: smartphonePrivateButtons[i].value});}}
  }

  function radioKnowledgeButtonsClicked(){
    for(var i = 0; i < radioKnowledgeButtons.length; i++){
      if(radioKnowledgeButtons[i].checked == true){
        chrome.storage.sync.set({radioKnowledgeButtons: radioKnowledgeButtons[i].value});}}
  }

  function radioInternetUsageButtonsClicked(){
    for(var i = 0; i < radioInternetUsageButtons.length; i++){
      if(radioInternetUsageButtons[i].checked == true){
        chrome.storage.sync.set({radioInternetUsageButtons: radioInternetUsageButtons[i].value});}}
  }

  function radioVeranstaltungsportaleButtonsClicked(){
    for(var i = 0; i < radioVeranstaltungsportaleButtons.length; i++){
      if(radioVeranstaltungsportaleButtons[i].checked == true){
        chrome.storage.sync.set({radioVeranstaltungsportaleButtons: radioVeranstaltungsportaleButtons[i].value});}}
  }

  function radioSingleVeranstaltungsportaleButtonsClicked(){
    for(var i = 0; i < radioSingleVeranstaltungsportaleButtons.length; i++){
      if(radioSingleVeranstaltungsportaleButtons[i].checked == true){
        chrome.storage.sync.set({radioSingleVeranstaltungsportaleButtons: radioSingleVeranstaltungsportaleButtons[i].value});}}
  }

  function ageInputEntered(){
    chrome.storage.sync.set({ageInput: ageInput.value});
  }

  function educationInputEntered(){

  }

  function professionInputEntered(){

  }

  function question1inputEntered(){

  }

  function question2inputEntered(){

  }

  function question3inputEntered(){

  }

  function question4inputEntered(){

  }

  that.init = init;
  return that;
};
