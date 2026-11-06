import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('includes both endpoints by default', () => {
  assert.deepEqual(api.evenlySpaced(0, 10, 3), [0, 5, 10]);
});
test('produces one start sample', () => {
  assert.deepEqual(api.evenlySpaced(2, 9, 1), [2]);
});
test('produces no samples at zero count', () => {
  assert.deepEqual(api.evenlySpaced(2, 9, 0), []);
});
test('supports half-open samples', () => {
  assert.deepEqual(api.evenlySpaced(0, 10, 2, false), [0, 5]);
});
test('supports descending intervals', () => {
  assert.deepEqual(api.evenlySpaced(10, 0, 3), [10, 5, 0]);
});
test('rejects non-finite endpoints', () => {
  assert.throws(() => api.evenlySpaced(NaN, 1, 2), RangeError);
});
