import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('wraps plain text', () => {
  assert.equal(api.wrapHtmlComment('note'), '<!-- note -->');
});
test('breaks double hyphen', () => {
  assert.equal(api.wrapHtmlComment('a--b'), '<!-- a- -b -->');
});
test('handles empty comment', () => {
  assert.equal(api.wrapHtmlComment(''), '<!--  -->');
});
test('rewrites repeated hyphens', () => {
  assert.equal(api.wrapHtmlComment('----'), '<!-- - - - - -->');
});
test('preserves unicode', () => {
  assert.equal(api.wrapHtmlComment('café'), '<!-- café -->');
});
test('rejects non-string', () => {
  assert.throws(() => api.wrapHtmlComment(1), TypeError);
});
