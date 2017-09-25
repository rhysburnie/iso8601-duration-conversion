var iso8601Duration = require('iso8601-duration');
var millisecondsToIso8601Duration = require('milliseconds-to-iso-8601-duration');

(function (iso8601DurationConversion) {
  iso8601DurationConversion.parse = iso8601Duration.parse;
  iso8601DurationConversion.toSeconds = function(arg) {
    if (typeof arg === 'string') {
      arg = iso8601Duration.parse(arg);
    }
    return iso8601Duration.toSeconds(arg);
  };
  iso8601DurationConversion.pattern = iso8601Duration.pattern;
  iso8601DurationConversion.toMilliseconds = function(iso8601DurationString) {
    return iso8601Duration.toSeconds(iso8601Duration.parse(iso8601DurationString)) * 1000;
  };
  iso8601DurationConversion.msToString = function(ms) {
    return millisecondsToIso8601Duration.iso8601duration(ms);
  };
})(typeof exports === 'undefined' ? iso8601DurationConversion = {} : exports);
