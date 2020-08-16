var ChromeExtensionURUT = ChromeExtensionURUT || {};

ChromeExtensionURUT.ContentStorage = function() {
  "use strict";

  //objects for content
  var that = {},
  introduction, explanation, demographic,
  szenario1, sz1task1, sz1task2,
  sz1task3, sz1task4, szenario2,
  sz2task1, sz2task2, abschluss1,
  abschluss2, abschluss3, contentObjects;


  //fill variables contentObjects
  function init() {

    introduction = {id: 1, isTask: 0, title: "Einführung", content: "Guten Tag, mein Name ist (Name) und ich werde Sie heute durch den Usability-Test führen. </br> Herzlichen Dank, dass Sie sich Zeit für diesen Test nehmen. Sie helfen uns damit sehr. Bevor wir beginnen, habe ich ein paar Informationen für Sie, die ich Ihnen vorlese, damit ich nichts vergesse. Lassen Sie mich kurz den Zweck des Tests erklären: Im Rahmen einer Seminararbeit der Universität Regensburg bitten wir Personen eine Website zu benutzen, die wir gerade verbessern wollen, damit wir Stärken und Schwächen erkennen können."};

    explanation = {id: 2, isTask: 0, title: "Erklärung", content: "Hier wird die Anwendung erklärt"};
    demographic = {id: 3, isTask: 0, title: "Demographischer Fragebogen", content: "blabla"};

    szenario1 = {id: 4, isTask: 0, title: "Hintergrundszenario 1", content: "Sie wollen sich mal wieder kulturell bereichern. Ihnen wurde das Statt Theater empfohlen, da diese eine Vielzahl unterschiedlicher Veranstaltungen bieten soll. Sie wollen sich nun auf deren Webseite über die anstehenden Events etc. informieren."};
    sz1task1 = {id: 5, isTask: 1, title: "Task 1", content: "Schauen Sie sich zunächst auf der Seite um und beschreiben Sie ihren ersten Eindruck. "};
    sz1task2 = {id: 6, isTask: 1, title: "Task 2", content: "Sie wollen gerne im April eine Veranstaltung besuchen. Informieren Sie sich über die Künstler und deren Programm. Interessiert Sie eine der Veranstaltungen?"};
    sz1task3 = {id: 7, isTask: 1, title: "Task 3", content: "Sie wollen gerne zu der Veranstaltung des Impro Theaters Chamäleon am 21.04.2019 gehen. Finden Sie heraus was ein Ticket kostet und bestellen Sie eines."};
    sz1task4 = {id: 8, isTask: 1, title: "Task 4", content: "Für etwaige Rückfragen suchen Sie sich noch die Adresse und die Telefonnummer des Statt Theaters heraus."};
1
    szenario2 = {id: 9, isTask: 0, title: "Hintergrundszenario 2", content: "Ihnen hat der Besuch im Statt Theater einfach sehr gut gefallen. Sie wissen das das Statt Theater ein kleiner Verein ist, weshalb Sie das Statt Theater Kollektiv gerne finanziell unterstützen wollen."};
    sz2task1 = {id: 10, isTask: 1, title: "Task 5", content: "Verschaffen Sie sich einen Überblick, welche Möglichkeiten Sie hierbei haben."};
    sz2task2 = {id: 11, isTask: 1, title: "Task 6", content: "Weil Sie als Unterstützer des Vereins gerne über alle News informiert sein wollen, entschließen Sie sich dazu den Newsletter zu abonnieren."};

    abschluss1 = {id: 12, isTask: 0, title: "Beschreibung 1", content: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was… fanden Sie schlecht?"};
    abschluss2 = {id: 13, isTask: 0, title: "Beschreibung 2", content: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was… fanden Sie gut?"};
    abschluss3 = {id: 14, isTask: 0, title: "Beschreibung 3", content: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was… würden Sie verbessern?"};

    contentObjects = [];
    contentObjects.push(introduction);
    contentObjects.push(explanation);
    contentObjects.push(demographic);
    contentObjects.push(szenario1);
    contentObjects.push(sz1task1);
    contentObjects.push(sz1task2);
    contentObjects.push(sz1task3);
    contentObjects.push(sz1task4);
    contentObjects.push(szenario2);
    contentObjects.push(sz2task1);
    contentObjects.push(sz2task2);
    contentObjects.push(abschluss1);
    contentObjects.push(abschluss2);
    contentObjects.push(abschluss3);

    return that;
  }

  function getContentObjects() {
    return contentObjects;
  }

  that.init = init;
  that.getContentObjects = getContentObjects;
  return that;
};
