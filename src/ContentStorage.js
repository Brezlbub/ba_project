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
    console.log("contentstorage running");
    introduction = {id: 1, title: "Einführung", content: "Guten Tag, mein Name ist (Name) und ich werde Sie heute durch den Usability-Test führen. Herzlichen Dank, dass Sie sich Zeit für diesen Test nehmen. Sie helfen uns damit sehr. Bevor wir beginnen, habe ich ein paar Informationen für Sie, die ich Ihnen vorlese, damit ich nichts vergesse. Lassen Sie mich kurz den Zweck des Tests erklären: Im Rahmen einer Seminararbeit der Universität Regensburg bitten wir Personen eine Website zu benutzen, die wir gerade verbessern wollen, damit wir Stärken und Schwächen erkennen können. Die heutige Sitzung wird ca. 30 Minuten dauern. Das Wichtigste vorab: Wir testen die Website, und nicht Sie. Sie können nichts falsch machen. Während Sie die Seite benutzen, werde ich Sie bitten Ihre Gedanken laut auszusprechen: Sagen Sie, was Sie gerade sehen, was Sie zu erreichen versuchen und was Sie denken. Damit helfen Sie uns sehr. Machen Sie sich außerdem keine Gedanken unsere Gefühle zu verletzen. Die Website ist von Dritten erstellt worden. Unsere Aufgabe ist es auf Grund Ihres Feedbacks und des Feedbacks weiterer Testteilnehmer, Vorschläge zur Verbesserung der Website zu entwickeln. Falls Sie irgendwelche Fragen während der Sitzung haben, fragen Sie einfach. Sollten Sie eine Pause benötigen, geben Sie mir jederzeit Bescheid. Es beobachten Sie Mitglieder des Projektteams, die sich auch Notizen machen. Bitte lassen Sie sich davon nicht irritieren. Die Notizen beziehen sich auf Beobachtungen zur Website. Nochmals Sie können nichts falsch machen oder etwas Falsches sagen, wenn Sie laut über Ihre Gedanken bei der Nutzung der Website sprechen. Es geht darum, was Sie bei der Nutzung der Website denken."};

    explanation = {id: 2, title: "Erklärung", content: "Hier wird die Anwendung erklärt"};
    demographic = {id: 3, title: "Demographischer Fragebogen", content: "blabla"};

    szenario1 = {id: 4, title: "Hintergrundszenario 1", content: "Sie wollen sich mal wieder kulturell bereichern. Ihnen wurde das Statt Theater empfohlen, da diese eine Vielzahl unterschiedlicher Veranstaltungen bieten soll. Sie wollen sich nun auf deren Webseite über die anstehenden Events etc. informieren."};
    sz1task1 = {id: 5, title: "Task 1", content: "Schauen Sie sich zunächst auf der Seite um und beschreiben Sie ihren ersten Eindruck. "};
    sz1task2 = {id: 6, title: "Task 2", content: "Sie wollen gerne im April eine Veranstaltung besuchen. Informieren Sie sich über die Künstler und deren Programm. Interessiert Sie eine der Veranstaltungen?"};
    sz1task3 = {id: 7, title: "Task 3", content: "Sie wollen gerne zu der Veranstaltung des Impro Theaters Chamäleon am 21.04.2019 gehen. Finden Sie heraus was ein Ticket kostet und bestellen Sie eines."};
    sz1task4 = {id: 8, title: "Task 4", content: "Für etwaige Rückfragen suchen Sie sich noch die Adresse und die Telefonnummer des Statt Theaters heraus."};

    szenario2 = {id: 9, title: "Hintergrundszenario 2", content: "Ihnen hat der Besuch im Statt Theater einfach sehr gut gefallen. Sie wissen das das Statt Theater ein kleiner Verein ist, weshalb Sie das Statt Theater Kollektiv gerne finanziell unterstützen wollen."};
    sz2task1 = {id: 10, title: "Task 1", content: "Verschaffen Sie sich einen Überblick, welche Möglichkeiten Sie hierbei haben."};
    sz2task2 = {id: 11, title: "Task2", content: "Weil Sie als Unterstützer des Vereins gerne über alle News informiert sein wollen, entschließen Sie sich dazu den Newsletter zu abonnieren."};

    abschluss1 = {id: 12, title: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was …", content: "-	… fanden Sie schlecht?"};
    abschluss2 = {id: 13, title: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was …", content: "-	… fanden Sie gut?"};
    abschluss3 = {id: 14, title: "Beschreiben Sie kurz was Ihnen nach der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. Was …", content: "-	… würden Sie verbessern?"};

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
