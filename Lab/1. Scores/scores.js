var $ = function (id) { return document.getElementById(id); };

var scores = [];
var studentNames = [];

var displayScores = function () {   
    $("scores").value += studentNames;
};

var addScore = function () {
   var name =  $("first_name").value;
   var lastname = $("last_name").value; 
   var score = parseInt($("score").value);
    
   scores.push(score);
    var x = name + ", " + lastname +" : " + score + "\n";
    studentNames.push(x);

    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("score").value = "";
    $("first_name").focus();
    displayScores();
};

var clearScores = function () {   

    
    // remove the score data from the web page
    $("average_score").value = "";
    $("scores").value = "";
    
    $("first_name").focus();
};

var sortScores = function () {   
     
};

window.onload = function () {
    $("add_button").onclick = addScore;
    $("clear_button").onclick = clearScores;    
    $("sort_button").onclick = sortScores;    
    $("first_name").focus();
};