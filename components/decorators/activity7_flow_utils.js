function saveActivity7Result(activity7Data, memberIndex, phase, summary) {
  if (!activity7Data[memberIndex]) {
    activity7Data[memberIndex] = {
      rest: null,
      exercise1: null,
      exercise2: null,
    };
  }

  activity7Data[memberIndex][phase] = summary;

  return activity7Data;
}

function getNextActivity7Step(currentIndex, membersLength, currentRoute, nextRoute) {
  if (currentIndex < membersLength - 1) {
    return {
      nextIndex: currentIndex + 1,
      route: currentRoute,
    };
  }

  return {
    nextIndex: 0,
    route: nextRoute,
  };
}

module.exports = {
  saveActivity7Result,
  getNextActivity7Step,
};
