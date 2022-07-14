const { generateText } = require('./util');

test('should output name and age', () => {
  const text = generateText('Timo', 31);
  expect(text).toBe('Timo (31 years old)');
});