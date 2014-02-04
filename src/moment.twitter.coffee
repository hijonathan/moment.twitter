# Times in millisecond
second = 1e3
minute = 6e4
hour = 36e5
day = 864e5
week = 6048e5

formats =
    seconds:
        short: 's'
        long: ' sec'
    minutes:
        short: 'm'
        long: ' min'
    hours:
        short: 'h'
        long: ' hr'
    days:
        short: 'd'
        long: ' day'


initialize = (moment) ->

    # This function does most of the work.
    twitterFormat = (format) ->
        diff = Math.abs @diff moment()
        unit = null
        num = null

        if diff <= second
            unit = 'seconds'
            num = 1
        else if diff < minute
            unit = 'seconds'
        else if diff < hour
            unit = 'minutes'
        else if diff < day
            unit = 'hours'
        else if format is 'short'
            if diff < week
                unit = 'days'
            else
                return @format 'M/D/YY'
        else
            return @format 'MMM D'

        unless num and unit
            # Format the number
            num = moment.duration(diff)[unit]()

        unitStr = unit = formats[unit][format]
        if format is 'long' and num > 1
            unitStr += 's'

        return num + unitStr


    # Exposed shorthand methods.
    moment.fn.twitterLong = ->
        twitterFormat.call @, 'long'

    moment.fn.twitter = moment.fn.twitterShort = ->
        twitterFormat.call @, 'short'

    return moment


if typeof define is 'function' and define.amd
    # AMD. Register as an anonymous module.
    define 'moment-twitter', ['moment'], (moment) ->
        @moment = initialize moment
else if typeof module isnt 'undefined'
    # CommonJS
    module.exports = initialize(require('moment'))
else if typeof window isnt "undefined" and window.moment
    # Browser globals
    @moment = initialize @moment
