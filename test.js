var moment = require('./moment-twitter'),
    assert = require('assert')

assert.equal(moment().subtract(25, 'seconds').twitter(), '25s')
assert.equal(moment().subtract(25, 'seconds').twitterLong(), '25 secs')

assert.equal(moment().subtract(5, 'minutes').twitter(), '5m')
assert.equal(moment().subtract(5, 'minutes').twitterLong(), '5 mins')

assert.equal(moment().subtract(5, 'hours').twitter(), '5h')
assert.equal(moment().subtract(5, 'hours').twitterLong(), '5 hrs')

var twoDays = moment().subtract(2, 'days')
assert.equal(moment().subtract(2, 'days').twitter(), '2d')
assert.equal(twoDays.twitterLong(), twoDays.format('MMM D'))

assert.equal(moment.twitter, moment.twitterShort)

process.exit(0)
