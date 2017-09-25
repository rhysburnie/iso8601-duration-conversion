
// Welcome! require() some modules from npm (like you were using browserify)
// and then hit Run Code to run your code on the right side.
// Modules get downloaded from browserify-cdn and bundled in your browser.
var iso8601Duration = require('iso8601-duration');

// https://github.com/wking/milliseconds-to-iso-8601-duration/blob/master/milliseconds-to-iso-8601-duration.js
var millisecondsToISO8601Duration = function(milliseconds) {
		if (milliseconds == 0) {
			return 'P0D';
		}
		var offset = Math.floor(milliseconds);
		var days = 0;
		if (offset < 0) {
			days = Math.floor(offset % 86400000);
			offset -= 86400000 * days;
		}
		var milliseconds = offset % 1000;
		offset = Math.floor(offset / 1000);
		var seconds = offset % 60;
		offset = Math.floor(offset / 60);
		var minutes = offset % 60;
		offset = Math.floor(offset / 60);
		var hours = offset % 24;
		days += Math.floor(offset / 24);
		var parts = ['P'];
		if (days) {
			parts.push(days + 'D');
		}
		if (hours || minutes || seconds || milliseconds) {
			parts.push('T');
			if (hours) {
				parts.push(hours + 'H');
			}
			if (minutes) {
				parts.push(minutes + 'M');
			}
			if (seconds || milliseconds) {
				parts.push(seconds);
				if (milliseconds) {
					milliseconds = milliseconds.toString();
					while (milliseconds.length < 3) {
						milliseconds = '0' + milliseconds;
					}
					parts.push('.' + milliseconds);
				}
				parts.push('S');
			}
		}
		return parts.join('')
	};

var strDuration = 'P0Y0M0DT0H3M30.001S';
var objDuration = iso8601Duration.parse(strDuration);
console.log(objDuration);
var msMap = {
  days: 8.64e+7,
  hours: 3.6e+6,
  minutes: 60000,
  months: 2.628e+9,
  seconds: 1000,
  weeks: 6.048e+8,
  years: 3.154e+10,
};

var totalMS = 0;
Object.keys(msMap).forEach(function(key){
  if (objDuration[key]) {
    totalMS += objDuration[key] * msMap[key];
  }
});

console.log('totalMS', totalMS);
console.log(millisecondsToISO8601Duration(totalMS), strDuration)