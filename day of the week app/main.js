var d = new Date();
var weekday = new Array(7);

weekday[0] = 'sunday';
weekday[1] = 'monday';
weekday[2] = 'tuesday';
weekday[3] = 'wednesday';
weekday[4] = 'thursday';
weekday[5] = 'friday';
weekday[6] = 'saturday';

var date2 = new Date();
var weekday2 = new Array(7);

weekday2[0] = 'time to chillax';
weekday2[1] = 'monday morning blues!';
weekday2[2] = 'taco time!';
weekday2[3] = 'two more days to the weekend';
weekday2[4] = 'the weekend is almost here..';
weekday2[5] = 'weekend is here!';
weekday2[6] = 'time to party!';


var n = weekday[d.getDay()];
var n2 = weekday2[date2.getDay()];


var displayweekday = document.getElementById('weekday');
var phrase = document.getElementById('phrase');

whatDayIsIt();

function whatDayIsIt(){
	displayweekday.innerText = n;
	phrase.innerText = n2;
}