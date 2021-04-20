import verifyPassword from './verifyPassword';

describe('Veryfinng if password if correct', () => {
  test('Too short password "pass" returns code:1 and description', () => {
    expect(verifyPassword('pass')).toEqual({
      code: 1,
      description: 'Password is too short',
    });
  });
  test('Too short password "password" returns code:2 and description', () => {
    expect(verifyPassword('password')).toEqual({
      code: 2,
      description: 'Password does not consist of 1 special letter',
    });
  });
  test('Too short password "!password" returns code:3 and description', () => {
    expect(verifyPassword('!password')).toEqual({
      code: 3,
      description: 'Password does not consist of 1 number',
    });
  });
  test('Too short password "!password1" returns code:4 and description', () => {
    expect(verifyPassword('!password1')).toEqual({
      code: 4,
      description: 'Password does not consist of 1 capital letter',
    });
  });
  test('Correct password return code: 0, no description', () => {
    expect(verifyPassword('!Password1')).toEqual({
      code: 0,
    });
  });
});
