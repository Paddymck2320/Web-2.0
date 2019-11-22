"use strict";

var clearMessage = function(messageNode) {
    messageNode.nodeValue = " ";
};

var hasNoError = function(messageNode) {
    return (messageNode.nodeValue === " ") ? true: false;
};

var entriesCorrect = function(event, dt){
    if (event.length === 0 || dt.length === 0){
        return false;
    }
    return true;
};

var dateCorrect = function(dt){
    var date;
    if (dt.indexOf("/") === -1) { 
        return false;
    }
    var year = dt.substring(dt.length - 4); 
        if (isNaN(year)) {
            return false;
        }  
        date = new Date(dt);
        if (date === "Invalid Date") {
           return false;
        }  
        return true; 
};

var getDays = function(dt){
    var date, days, today, oneDay;
         date = new Date(dt); 
        today = new Date();
        oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
        days = ( date.getTime() - today.getTime() ) / oneDay;
        days = Math.ceil(days);

        return days;
};

var displayMessage = function(days, message, event){

    if (days === 0) {
        message.nodeValue = "Hooray! Today is " + event + "!";
    }
    if (days < 0) {
        event = event.substring(0,1).toUpperCase() + event.substring(1); // capitalize event
        message.nodeValue = event + " happened " + Math.abs(days) + " day(s) ago.";        
    }
    if (days > 0) {
        message.nodeValue = days + " day(s) until " + event + "!";
    }
}