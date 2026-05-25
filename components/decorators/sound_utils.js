function classifySound(meterValue) {
  if (typeof meterValue !== 'number') return 'Not measuring';

  if (meterValue < -50) return 'Quiet';
  if (meterValue < -25) return 'Normal';

  return 'Loud';
}

function getApproxDb(meterValue) {
  if (typeof meterValue !== 'number') return null;

  return Math.round(meterValue + 100);
}

module.exports = {
  classifySound,
  getApproxDb,
};