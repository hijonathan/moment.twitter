var moment = require('./moment-twitter'),
    assert = require('assert')

assert.equal(moment().subtract('seconds', 25).twitter(), '25s')
assert.equal(moment().subtract('seconds', 25).twitterLong(), '25 secs')

assert.equal(moment().subtract('minutes', 5).twitter(), '5m')
assert.equal(moment().subtract('minutes', 5).twitterLong(), '5 mins')

assert.equal(moment().subtract('hours', 5).twitter(), '5h')
assert.equal(moment().subtract('hours', 5).twitterLong(), '5 hrs')

var twoDays = moment().subtract('days', 2)
assert.equal(moment().subtract('days', 2).twitter(), '2d')
assert.equal(twoDays.twitterLong(), twoDays.format('MMM D'))

assert.equal(moment.twitter, moment.twitterShort)

process.exit(0)
