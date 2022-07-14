const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
  const text = generateText('Timo', 31);
  expect(text).toBe('Timo (31 years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Timo', 31);
  expect(text).toBe('Timo (31 years old)');
});