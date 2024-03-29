var $ = function (id) { return document.getElementById(id); };

function grabFile(file) {
	var request = new XMLHttpRequest();
	if (request){
		request.onreadystatechange = function() {
			parseResponse(request);
		};
		
		request.open("GET", file, true);
		request.send(null);
	}
}

function parseResponse(request) {
	if (request.readyState == 4) {
		if (request.status == 200 || request.status == 304) {
			var data = JSON.parse(request.responseText)
			var name = data.person.name;
			var email = data.person.email;
			var website = data.person.website;
			var line1 = "<h2><a href=mailto:" + email +  ">" + name + "</a></h2>";
			var line2 = "";
			var link = document.createElement("a");
			link.setAttribute("href", website);
			var linktext = document.createTextNode(website);
			link.appendChild(linktext);
			var details = document.getElementById("details");
			details.innerHTML = request.responseText;
		}
	}
}

window.onload = function(){
	
	var ul = $("list");
	//Get a reference to all the <a> tags:
	var aElements = ul.getElementsByTagName("a");
	
	for(var i=0; i<aElements.length; i++){
		
		//Assign event handler to each link (<a> tag)
		aElements[i].onclick = function(){
			grabFile(this.href);
			return false;
		}
	}
}