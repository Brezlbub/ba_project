var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.ContentStorage = function() {
  "use strict";

  //objects for content
  var that = {},
  introduction, explanation, presurvey,
  szenario, task1, task2, task3, task4, task5, task6,
  question1, question2, question3, sus, abschluss,
  contentObjects;


  //fill variables contentObjects
  function init() {

    introduction = {id: 1, stepBack: 0, stepNext: 1, isTask: 0, title: "Einführung", content: "Guten Tag, mein Name ist (Name) und ich werde Sie heute durch den Usability-Test führen. </br> Herzlichen Dank, dass Sie sich Zeit für diesen Test nehmen. Sie helfen uns damit sehr. Bevor wir beginnen, habe ich ein paar Informationen für Sie, die ich Ihnen vorlese, damit ich nichts vergesse. Lassen Sie mich kurz den Zweck des Tests erklären: Im Rahmen einer Seminararbeit der Universität Regensburg bitten wir Personen eine Website zu benutzen, die wir gerade verbessern wollen, damit wir Stärken und Schwächen erkennen können."};

    explanation = {id: 2, stepBack: 1, stepNext: 1, isTask: 0, title: "Erklärung", content: "Hier wird die Anwendung erklärt"};
    presurvey = {id: 3, stepBack: 0, stepNext: 0, isTask: 0, title: "Vorabfragebogen", content: ""};

    szenario = {id: 4, stepBack: 0, stepNext: 1, isTask: 0, title: "Hintergrundszenario", content: "Sie wollen sich mal wieder kulturell bereichern. Ihnen wurde das Statt Theater empfohlen, da diese eine Vielzahl unterschiedlicher Veranstaltungen bieten soll. Sie wollen sich nun auf deren Webseite über die anstehenden Events etc. informieren."};
    task1 = {id: 5, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 1", content: "Schauen Sie sich zunächst auf der Seite um und beschreiben Sie ihren ersten Eindruck. "};
    task2 = {id: 6, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 2", content: "Sie wollen gerne im April eine Veranstaltung besuchen. Informieren Sie sich über die Künstler und deren Programm. Interessiert Sie eine der Veranstaltungen?"};
    task3 = {id: 7, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 3", content: "Sie wollen gerne zu der Veranstaltung des Impro Theaters Chamäleon am 21.04.2019 gehen. Finden Sie heraus was ein Ticket kostet und bestellen Sie eines."};
    task4 = {id: 8, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 4", content: "Für etwaige Rückfragen suchen Sie sich noch die Adresse und die Telefonnummer des Statt Theaters heraus."};

    task5 = {id: 9, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 5", content: "Ihnen hat der Besuch im Statt Theater einfach sehr gut gefallen. Sie wissen das das Statt Theater ein kleiner Verein ist, weshalb Sie das Statt Theater Kollektiv gerne finanziell unterstützen wollen. </br></br>Verschaffen Sie sich einen Überblick, welche Möglichkeiten Sie hierbei haben."};
    task6 = {id: 10, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 6", content: "Weil Sie als Unterstützer des Vereins gerne über alle News informiert sein wollen, entschließen Sie sich dazu den Newsletter zu abonnieren.</br></br>Finden Sie den Newsletter. Sie müssen das Abo nicht abschließen."};

    question1 = {id: 11, stepBack: 0, stepNext: 1, isTask: 0, title: "Beschreibung 1", content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br><b>Was fanden Sie schlecht?</b>"};
    question2 = {id: 12, stepBack: 0, stepNext: 1, isTask: 0, title: "Beschreibung 2", content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br><b>Was fanden Sie gut?</b>"};
    question3 = {id: 13, stepBack: 0, stepNext: 1, isTask: 0, title: "Beschreibung 3", content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br><b>Was würden Sie verbessern?</b>"};

    sus = {id: 14, stepBack: 0, stepNext: 1, isTask: 0, title: "Systembefragung (SUS)", content: "Bewerten Sie zum Abschluss die Anwendung, mit der Sie den Test durchgeführt haben."};
    abschluss = {id: 15, stepBack: 0, stepNext: 0, isTask: 0, title: "Abschluss", content: "Herzlichen Dank für die Teilnahme an meiner Studie!</br></br> Zum Schluss bitte noch auf den Button drücken.</br>Danach wird eine Datei runtergeladen. Diese bitte an folgende E-Mail als Anhang schicken: </br></br> Julian.Saenze@stud.uni-regensburg.de"};

    contentObjects = [];
    contentObjects.push(introduction);
    contentObjects.push(explanation);
    contentObjects.push(presurvey);
    contentObjects.push(szenario);
    contentObjects.push(task1);
    contentObjects.push(task2);
    contentObjects.push(task3);
    contentObjects.push(task4);
    contentObjects.push(task5);
    contentObjects.push(task6);
    contentObjects.push(question1);
    contentObjects.push(question2);
    contentObjects.push(question3);
    contentObjects.push(sus);
    contentObjects.push(abschluss);

    return that;
  }

  function getContentObjects() {
    return contentObjects;
  }

  that.init = init;
  that.getContentObjects = getContentObjects;
  return that;
};
