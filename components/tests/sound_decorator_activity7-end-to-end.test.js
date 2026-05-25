const {
  saveActivity7Result,
  getNextActivity7Step,
} = require('../decorators/activity7_flow_utils');

test('Activity 7 user completes phase and moves to next team member', () => {
  let activity7Data = {};
  const memberIndex = 0;
  const membersLength = 2;

  activity7Data = saveActivity7Result(
    activity7Data,
    memberIndex,
    'rest',
    'Normal breathing - movement 0.042'
  );

  const nextStep = getNextActivity7Step(
    memberIndex,
    membersLength,
    '/activity7.6',
    '/activity7.7'
  );

  expect(activity7Data[0].rest).toBe('Normal breathing - movement 0.042');
  expect(nextStep.nextIndex).toBe(1);
  expect(nextStep.route).toBe('/activity7.6');
});
