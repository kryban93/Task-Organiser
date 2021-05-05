import randomId from './randomId';

describe('Veryfinng if randomId function works correctly', () => {
  test('Check if function returns some random id', () => {
    expect(randomId().length).toBeGreaterThan(0);
  });
});
