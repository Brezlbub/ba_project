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

    introduction = {id: 1, stepBack: 0, stepNext: 1, isTask: 0, title: "Einführung", content: "Herzlichen Dank, dass Sie sich Zeit für diesen Test nehmen.</br></br>Lassen Sie mich kurz den Zweck des Tests erklären:</br> Im Rahmen meiner Bachelorarbeit der Universität Regensburg bitte ich Personen eine Website zu benutzen, die ich gerade verbessern möchte, damit Stärken und Schwächen erkannt werden können. Der Test wird über dieses Browser-Plugin durchgeführt.</br></br>Das Wichtigste vorab: Die Webseite wird getestet und nicht Sie. Sie können nichts falsch machen.</br></br> Während Sie auf der zu testenden Seite (https://www.statt-theater.de/index.html) sind, werden Ihnen durch diese Anwendung Aufgaben (Tasks) gestellt, die Sie bearbeiten sollen.</br></br>Der Test dauert in etwa 20-30 Minuten.</br></br><center>(Drücken Sie oben rechts '>', um weiter auf die nächste Seite zu gelangen.)</center>"};

    explanation = {id: 2, stepBack: 1, stepNext: 1, isTask: 0, title: "Erklärung", content: "Bevor Sie beginnen, möchte ich Ihnen kurz erklären, was auf Sie zukommt und wie die Anwendung funktioniert.</br></br>Zuerst bitte ich Sie einen Vorabfragebogen auszufüllen.</br></br>Danach erwarten Sie 6 Tasks. <b>Zuerst</b> lesen Sie die Tasks bitte gründlich durch. </br><b>Erst danach</b> drücken Sie auf 'START', um die Bearbeitung zu beginnen.</br></br>Während Sie die Aufgabe bearbeiten, kommentieren Sie bitte Ihre Gedanken zu der Seite und <b>jedes mal</b> wenn Sie auf ein <b>Problem</b> gestoßen. </br>So klein das Problem auch sein mag, helfen Sie mit jedem Kommentar, die Seite besser zu machen. Zum Abschicken eines Kommentars drücken Sie auf den grünen Haken.</br> Wenn Sie die Task abgeschlossen haben, drücken Sie auf 'STOP'. Wenn Sie die Aufgabe nicht bewältigen können, drücken Sie ebenfalls auf 'STOP'. Danach haben Sie noch die Möglichkeit zu kommentieren, warum Sie die Aufgabe nicht abschließen konnten.</br></br>Im Anschluss zu den Tasks dürfen Sie durch drei Beschreibungsfragen Ihre Erfahrungen auf der Seite genauer ergänzen.</br></br>Kurz vor Schluss bitte ich Sie durch einen letzten kurzen Fragebogen diese Anwendung zu bewerten.</br></br>Ganz entscheidend ist zum Abschluss, dass sie eine Datei runterladen und mir dann an meine Mailadresse als Anhang schicken.</br></br><b>Wenn sich der Test schließt, läuft er ganz normal weiter, Sie müssen ihn lediglich oben rechts im Browser durch das Klicken auf das 'UT'-Icon erneut öffnen</b>.</br></br><center>(Um mit dem Test zu beginnen, drücken Sie oben rechts auf '>'.)</center>"};

    presurvey = {id: 3, stepBack: 0, stepNext: 0, isTask: 0, title: "Vorabfragebogen", content: ""};

    szenario = {id: 4, stepBack: 0, stepNext: 1, isTask: 0, title: "Hintergrundszenario",
    content: "Sie wollen sich mal wieder kulturell bereichern. Ihnen wurde das Statt Theater empfohlen, da dieses eine Vielzahl unterschiedlicher Veranstaltungen bieten soll. Sie wollen sich nun auf deren Webseite über die anstehenden Events etc. informieren.</br></br><center>(Um mit dem ersten Task zu beginnen, drücken Sie oben rechts auf '>').</center>"};
    task1 = {id: 5, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 1",
    content: "Schauen Sie sich zunächst <b>nur auf der Startseite</b> um und beschreiben Sie ihren ersten Eindruck. </br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};
    task2 = {id: 6, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 2",
    content: "Sie wollen gerne im Oktober diesen Jahres eine Veranstaltung besuchen. Informieren Sie sich über die Künstler und deren Programm. Interessiert Sie eine der Veranstaltungen? </br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};
    task3 = {id: 7, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 3",
    content: "Sie wollen gerne zu der Veranstaltung des ImproTheaters Chamäleon am 18.10.2020 gehen. Finden Sie heraus was ein Ticket kostet. Wie <b>würden</b> Sie ein Ticket bestellen? </br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};
    task4 = {id: 8, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 4",
    content: "Für etwaige Rückfragen suchen Sie sich noch die Adresse und die Telefonnummer des Statt Theaters heraus. Wo sind Sie fündig geworden? </br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};

    task5 = {id: 9, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 5",
    content: "Ihnen hat der Besuch im Statt Theater einfach sehr gut gefallen. Sie wissen, dass das Statt Theater ein kleiner Verein ist, weshalb Sie das Statt Theater gerne finanziell unterstützen wollen. </br></br>Verschaffen Sie sich einen Überblick, welche Möglichkeiten Sie hierbei haben.</br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};
    task6 = {id: 10, stepBack: 0, stepNext: 0, isTask: 1, title: "Task 6",
    content: "Weil Sie als Unterstützer des Vereins gerne über alle News informiert sein wollen, entschließen Sie sich dazu den Newsletter zu abonnieren.</br></br>Finden Sie den Newsletter. Sie müssen das Abo nicht abschließen. </br></br><center>(Drücken Sie auf START um mit der Task zu beginnen.)</center>"};

    question1 = {id: 11, stepBack: 0, stepNext: 1, isTask: 0, title: "Beschreibung 1",
    content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br>Was fanden Sie <b>schlecht</b>?</br></br><center>(Mehrere Antworten möglich. Wenn Sie fertig sind, drücken Sie oben rechts auf '>'.)</center>"};
    question2 = {id: 12, stepBack: 1, stepNext: 1, isTask: 0, title: "Beschreibung 2",
    content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br>Was fanden Sie <b>gut</b>?</b></br></br><center>(Mehrere Antworten möglich. Wenn Sie fertig sind, drücken Sie oben rechts auf '>'.)</center>"};
    question3 = {id: 13, stepBack: 1, stepNext: 1, isTask: 0, title: "Beschreibung 3",
    content: "Beschreiben Sie kurz was Ihnen <b>nach</b> der Bearbeitung der Aufgaben besonders an der Seite aufgefallen ist. </br></br>Was würden Sie <b>verbessern</b>?</b></br></br><center>(Mehrere Antworten möglich. Wenn Sie fertig sind, drücken Sie oben rechts auf '>'.)</center>"};

    sus = {id: 14, stepBack: 0, stepNext: 0, isTask: 0, title: "Systembefragung (SUS)",
    content: "Den Test über die Seite haben Sie erfolgreich abgeschlossen! </br></br>Bewerten Sie zum Abschluss bitte die Anwendung an sich, mit der Sie den Test durchgeführt haben."};
    abschluss = {id: 15, stepBack: 0, stepNext: 0, isTask: 0, title: "Abschluss",
    content: "Zum Abschluss drücken Sie bitte auf <b>'DOWNLOAD'</b>.</br>Danach wird eine Datei runtergeladen. Diese bitte an folgende E-Mail als Anhang schicken: <center></br></br><b>Julian.Saenze@stud.uni-regensburg.de</b></br></br>Herzlichen Dank für die Teilnahme an meiner Studie!</center>"};

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
