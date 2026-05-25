const {
  classifySound,
  getApproxDb,
} = require('../decorators/sound_utils');

describe('Sound Utility Integration Test', () => {
  test('meter value is converted to dB and classified correctly', () => {
    const meterValue = -40;

    const approxDb = getApproxDb(meterValue);
    const soundLevel = classifySound(meterValue);

    expect(approxDb).toBe(60);
    expect(soundLevel).toBe('Normal');
  });
});
