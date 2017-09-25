Convert [iso8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) to and from milliseconds.

Example string: `'P0Y0M0DT0H3M30.001S'`

_es6_

```
import {toMilliseconds, msToString} from 'iso8601-duration-conversion';

const ms = toMilliseconds('P0Y0M0DT0H3M30.001S');
// ms === 210001
const str = msToString(210001);
// str === 'PT3M30.001S'
// NOTE: to extraneous data in original are not included
//       because their values were 0
// therefore:
toMilliseconds('PT3M30.001S') === ('P0Y0M0DT0H3M30.001S');
```

_common js_

```
var iso8601DurationConverter = require('iso8601-duration-conversion');

// Same as above except use:
// iso8601DurationConverter.toMilliseconds
// iso8601DurationConverter.msToString
```

See `index.test.js` for more detail.
