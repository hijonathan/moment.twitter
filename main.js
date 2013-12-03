(function() {
  var day, formats, hasModule, hour, minute, moment, second, twitterFormat, week;

  hasModule = typeof module !== 'undefined' && module.exports && typeof require !== 'undefined';

  if (hasModule != null) {
    moment = require('moment');
  } else {
    moment = this.moment;
  }

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

  twitterFormat = function(format) {
    var diff, num, unit, unitStr;
    diff = Math.abs(this.diff(moment()));
    unit = null;
    num = null;
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
        return this.format('M/D/YY');
      }
    } else {
      return this.format('MMM D');
    }
    if (!(num && unit)) {
      num = moment.duration(diff)[unit]();
    }
    unitStr = unit = formats[unit][format];
    if (format === 'long' && num > 1) {
      unitStr += 's';
    }
    return num + unitStr;
  };

  moment.fn.twitterLong = function() {
    return twitterFormat.call(this, 'long');
  };

  moment.fn.twitter = moment.fn.twitterShort = function() {
    return twitterFormat.call(this, 'short');
  };

  if (hasModule) {
    module.exports = moment;
  } else {
    this.moment = moment;
  }

}).call(this);
