const addition = require('./math');

test('addition de 2 + 4 doit donner 6', () => {
  expect(addition(2, 4)).toBe(6);
});