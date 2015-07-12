Twitter-like Date Formatter  [![Build Status](https://travis-ci.org/hijonathan/moment.twitter.png?branch=master)](https://travis-ci.org/hijonathan/moment.twitter)
==================================================

moment.twitter.js is an extension to moment.js that formats dates like Twitter.

### Usage

Works with AMD, CommonJS and browser environments.

```javascript
// AMD
define(['moment-twitter'], function(moment) { moment().twitter() });
```

```javascript
// CommonJS
var moment = require('moment-twitter');
moment().twitter()
```

```html
<!-- Browser -->
<script type="text/javascript" src="/moment.js"></script>
<script type="text/javascript" src="/moment-twitter.js"></script>
<script type="text/javascript">
    moment().twitter();
</script>
```

Works on both past and future dates.

### Methods

#### `moment().twitterLong(Boolean noPrefix)`

Web-friendly formatting.

__Parameters:__

 * *noPrefix*: By default, a negative symbol is prefixed to future dates. Passing `true` will remove this prefix. Note: times greater than 6 days will never have a prefix.

__Examples:__

Formats time relative to current time.

```
moment(moment() + (36e5 * 5)).twitterLong()
// 5 hours
```

Yes, it does smart pluralization.

```
moment(moment() + 36e5).twitterLong()
// 1 hour
```

Times between 24 hours and 6 days are converted to days.

```
moment(moment() + 6048e5).twitterLong()
// Mar 7
```

Future dates will be indicated with a negative symbol prefixed, unless *noPrefix* is set to `true`.

```
moment(moment() + 36e5).twitterLong()
// -1 hour

moment(moment() + 36e5).twitterLong(true)
// 1 hour
```

#### `moment().twitter(Boolean noPrefix)`

For use on mobile (alias `moment().twitterShort()`).

__Parameters:__

 * *noPrefix*: See parameters for `twitterLong()`.

__Examples:__

Units single characters, and there are no spaces.

```
moment(moment() + (36e5 * 5)).twitterShort()
// 5h
```

Times between 24 hours and 6 days are converted to days.

```
moment(moment() + (864e5 * 6)).twitterShort()
// 6d
```

Times greater than 6 days are slash-separated.

```
moment(moment() + 6048e5).twitterShort()
// 3/7/86
```
