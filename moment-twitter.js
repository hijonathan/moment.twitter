(function() {
  var day, formats, hour, initialize, minute, second, week;

  second = 1e3;

  minute = 6e4;

  hour = 36e5;

  day = 864e5;

  week = 6048e5;

  formats = {
    seconds: {
      short: 's',
      long: ' sec'
    },
    minutes: {
      short: 'm',
      long: ' min'
    },
    hours: {
      short: 'h',
      long: ' hr'
    },
    days: {
      short: 'd',
      long: ' day'
    }
  };

  initialize = function(moment) {
    var twitterFormat;
    twitterFormat = function(format, noPrefix) {
      var diff, now, num, prefix, unit, unitStr;
      now = moment();
      diff = Math.abs(this.diff(now));
      unit = null;
      num = null;
      prefix = '';
      if (diff <= second) {
        unit = 'seconds';
        num = 1;
      } else if (diff < minute) {
        unit = 'seconds';
      } else if (diff < hour) {
        unit = 'minutes';
      } else if (diff < day) {
        unit = 'hours';
      } else if (format === 'short') {
        if (diff < week) {
          unit = 'days';
        } else {
          noPrefix = true;
          return this.format('M/D/YY');
        }
      } else {
        noPrefix = true;
        return this.format('MMM D');
      }
      if (!(num && unit)) {
        num = moment.duration(diff)[unit]();
      }
      unitStr = unit = formats[unit][format];
      if (format === 'long' && num > 1) {
        unitStr += 's';
      }
      if (now.diff(this) < 0 && noPrefix !== true) {
        prefix = '-';
      }
      return prefix + num + unitStr;
    };
    moment.fn.twitterLong = function(noPrefix) {
      return twitterFormat.call(this, 'long', noPrefix);
    };
    moment.fn.twitter = moment.fn.twitterShort = function(noPrefix) {
      return twitterFormat.call(this, 'short', noPrefix);
    };
    return moment;
  };

  if (typeof define === 'function' && define.amd) {
    define('moment-twitter', ['moment'], function(moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== 'undefined') {
    module.exports = initialize(require('moment'));
  } else if (typeof window !== "undefined" && window.moment) {
    this.moment = initialize(this.moment);
  }

}).call(this);
