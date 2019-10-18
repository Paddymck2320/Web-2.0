var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

var addScore = function () {
	// get user entries
	var name = $("name").value;
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = name;
		scores[scores.length] = score;
	}
    
};

var displayResults = function (){
	var html = "";
	var average = 0;
	for(var i = 0; i < scores.length; i++){
		average = scores[i] + average;
	}
	average = average/scores.length;
	
	html = html + "<p>Average score = "+average+"</p>\n";
	$("results").innerHTML = html;
}

var displayScores = function (){
	
	var html = $("scores_display").value;
	for(var i = 0; i < names.length; i++)
	{
		html = html + names[i] +  scores[i] + "\n";
	}
	$("scores_display").innerHTML = html;
	
	
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


