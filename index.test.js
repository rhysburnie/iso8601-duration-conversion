import {test} from 'ava';
import {
  toMilliseconds,
  msToString,
  toSeconds,
  parse
} from './index';

const SAMPLE_DURATION = 'P0Y0M0DT0H3M30.001S';

test(t => {
  t.is(typeof parse, 'function');
  t.is(typeof toSeconds, 'function');
  t.is(typeof toMilliseconds, 'function');
  t.is(typeof msToString, 'function');
  const obj = parse(SAMPLE_DURATION);
  t.is(typeof obj, 'object');
  const seconds = toSeconds(SAMPLE_DURATION);
  t.is(typeof seconds, 'number');
  const ms = toMilliseconds(SAMPLE_DURATION);
  t.is(typeof ms, 'number');
  t.is(ms, seconds * 1000);
  const iso8601DurationString = msToString(ms);
  t.is(typeof iso8601DurationString, 'string');
  t.is(ms, toMilliseconds(iso8601DurationString));
});
