const {
  classifySound,
  getApproxDb,
} = require('./sound_utils');

describe('Sound Decorator Unit Tests', () => {
  test('classifySound returns Quiet for low meter value', () => {
    expect(classifySound(-60)).toBe('Quiet');
  });

  test('classifySound returns Normal for medium meter value', () => {
    expect(classifySound(-40)).toBe('Normal');
  });

  test('classifySound returns Loud for high meter value', () => {
    expect(classifySound(-10)).toBe('Loud');
  });

  test('classifySound handles invalid input', () => {
    expect(classifySound(null)).toBe('Not measuring');
  });

  test('getApproxDb converts meter value to approximate dB', () => {
    expect(getApproxDb(-40)).toBe(60);
  });

  test('getApproxDb handles invalid input', () => {
    expect(getApproxDb(undefined)).toBeNull();
  });
});