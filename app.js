function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score +"/10"+ "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Who is the first prophet in Islam?", ["Prophet Adam", "Prophet Mohammad", "Prophet Yusuf", "Prophet Ibrahim"], "Prophet Adam"),

    new Question("Who is the last prophet in Islam?", ["Prophet Adam", "Prophet Mikaeel", "Prophet Mohammad", "Prophet Yakub"], "Prophet Mohammad"),
    

    new Question("What is the number of prophets in Islam?", ["1,50,000", "1,00,000","1,24,000", "1,22,000"], "1,24,000"),
    

    new Question(" What is the number of days in Islamic Calendar?", ["365 Days", "366 Days","304 Days", "354 Days"], "354 Days"),

    new Question(" Which is the month of fasting in Islam?", ["Rajab", "Moharram", "Ramzan", "Shaban"], "Ramzan"),
   
    new Question(" How much part of his income is a Muslim required to donate as per Islam?", ["0.5%", "2%", "1.5%", "2.5%"], "2.5%"),
   
    new Question(" What is the number of Surah in Quran?", ["114", "115", "108", "72"], "114"),
   
    new Question(" Which day will Qayamat come?", ["Sunday", "Tuesday", "Monday", "Friday"], "Friday"),
   
    new Question("Where was the Qur'an revealed first?", ["Masjid-e-Aqsa", "Arab", "Makkah", "Madinah"], "Makkah"),
   
    new Question("What was the age of prophet Mohammad when Qur'an was first revealed to him?", ["Age 39", "Age 40", "Age 44", "Age 41"], "Age 40"),
   

];


var quiz = new Quiz(questions);


populate();