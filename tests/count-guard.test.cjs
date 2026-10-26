// 実行: node --test tests/
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const match = html.match(/function readStoredCount\(rawValue\) \{[\s\S]*?\n    \}/);
assert.ok(match, 'index.html に readStoredCount がある');
const readStoredCount = new Function(`${match[0]}; return readStoredCount;`)();

test('正しい保存値はそのまま数える', () => {
  assert.strictEqual(readStoredCount('0'), 0);
  assert.strictEqual(readStoredCount('42'), 42);
});

test('未保存・壊れた値・負の値は0として扱いNaNにしない', () => {
  for (const v of [null, undefined, '', 'abc', 'NaN', '-5', '{}']) {
    assert.strictEqual(readStoredCount(v), 0, String(v));
  }
});

test('来場者数は未保存なら1人目になる（従来と同じ）', () => {
  assert.strictEqual(readStoredCount(null) + 1, 1);
});

test('保存キーは変えていない', () => {
  for (const key of ['katakataVisitCount', 'katakataVisitorCount_v2']) {
    assert.ok(html.includes(`'${key}'`), key);
  }
  assert.ok(!/parseInt\(storedVisitorCount/.test(html));
});
