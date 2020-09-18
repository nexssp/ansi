const ansi = require('../src/ansi');

test('ansi.colors', (done) => {
  expect(Array.isArray(ansi.colors)).toBe(true);
  done();
});
