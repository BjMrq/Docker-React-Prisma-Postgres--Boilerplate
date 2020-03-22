import isValidPassword from '../src/utils/authentication/passwordValidation';

test('Should reject password shorter than 8 characters', () => {

  const isValid = isValidPassword('abc123');

  expect(isValid).toBe(false)

});

test('Should reject password that contains word password', () => {

  const isValid = isValidPassword('abcPassword098');

  expect(isValid).toBe(false);

});

test('Should correctly validate a valid password', () => {

  const isValid = isValidPassword('Test123098!');
  expect(isValid).toBe(true);
});
