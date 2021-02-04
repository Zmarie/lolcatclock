var isPartyTime = false;
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var timeEventJS = document.getElementById("timeEvent");

var lolCat = document.getElementById("lolcat");
var image;

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
	image = "https://www.petmd.com/sites/default/files/shutterstock_234894799.jpg";
    messageText = "Good Evening!";
} else {
	image = "https://fluffyplanet.com/wp-content/uploads/2020/04/shutterstock_774748948.jpg";
    messageText = "Good afternoon!";
}

timeEventJS.innerText = messageText;
lolCat.src = image;

var noon = 12;
var evening = 18; //6pm
var wakeUpTime = 9; //9pm
var lunchTime  = 12; //12pm
var partyTime = 17; //5pm
var napTime = lunchTime + 2; //2pm

var time = new Date().getHours();
var updateClock = function() {
	//the rest of the LOLCat Clock code
	showCurrentTime();
};

var showCurrentTime = function() {
	var clock = document.getElementById('clock');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = 'AM';
	//setting the hours
	if (hours >= noon) {
		meridian = "PM";
	}
	if (hours > noon) {
		hours = hours - 12;
	}
	
	//setting the minutes
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	//the string
	var clockTime = hours + ":" + minutes + ":" + seconds + ":" + meridian + "!";

//invoking function	
clock.innerText = clockTime;		
};

//calling the update clock
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyTimeBtn = document.getElementById('partyTimeButton');
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');

var partyEvent = function() {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;	partyTimeBtn.innerText = 'Party Over';
		partyTimeBtn.style.background = "#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeBtn.innerText = 'PARTY TIME!';
		partyTimeBtn.style.background = "#222";
	}
};

var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};


partyTimeBtn.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);                    