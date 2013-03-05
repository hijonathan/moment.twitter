moment = if require? then require('moment') else @moment


# Times in millisecond
second = 1e3
minute = 6e4
hour = 36e5
day = 864e5
week = 6048e5

monthFormat = 'MMM D'
formats =
    seconds:
        short: 's'
        long: ' sec'
    months:
        short: 'm'
        long: ' min'
    hours:
        short: 'h'
        long: ' hr'
    days:
        short: 'd'
        long: ' day'


moment.fn.twitter = moment.fn.twitterLong = ->
    @twitterFormat 'long'

moment.fn.twitterShort = ->
    @twitterFormat 'short'


moment.fn.twitterFormat = (format) ->
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
    else if format is 'short' and diff < week
        unit = 'days'

    unless unit
        return @format monthFormat
    unless num and unit
        # Format the number
        num = moment.duration(diff)[unit]()

    unitStr = unit = formats[unit][format]
    if format is 'long'
        unitStr = Humanize.pluralize num, unit

    return num + unitStr


if module?
    module.exports = moment
else
    @moment = moment
