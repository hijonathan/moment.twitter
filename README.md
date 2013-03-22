Twitter-like Date Formatter
==================================================

moment.twitter.js is an extension to moment.js that formats dates like Twitter.

Works on both past and future dates.

### Methods

#### `moment().twitter()`

Web-friendly formatting (alias `moment().twitterLong()`).

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

#### `moment().twitterShort()`

For use on mobile.

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


### TODO

1. Write some bad ass tests.
2. Compile this with grunt, I guess.
3. Get @timrwood to close timrwood/momentjs.com#24
4. npm, require, commonjs, etc support.
