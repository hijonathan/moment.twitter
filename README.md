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

#### `moment().twitterLong()`

Web-friendly formatting.

__Examples:__

Formats time relative to current time.

```
moment(moment() + (36e5 * 5)).twitter()
// 5 hours
```

Yes, it does smart pluralization.

```
moment(moment() + 36e5).twitter()
// 1 hour
```

Times greater than 24 hours are converted to dates like `Mar 7`

```
moment(moment() + 6048e5).twitter()
// Mar 7
```

#### `moment().twitter()`

For use on mobile (alias `moment().twitterShort()`).

__Examples:__

Units single characters, and there are no spaces.

```
moment(moment() + (36e5 * 5)).twitterShort()
// 5h
```

Times greater than 24 hours but more than 6 days are converted to days.

```
moment(moment() + (864e5 * 6)).twitterShort()
// 6d
```

Times greater than 6 days are slash-separated.

```
moment(moment() + 6048e5).twitterShort()
// 3/7/86
```
