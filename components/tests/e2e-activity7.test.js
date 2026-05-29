const React = require('react');
const renderer = require('react-test-renderer');

jest.mock('react-native', () => {
  const React = require('react');

  return {
    Text: ({ children }) => React.createElement('Text', null, children),
    TouchableOpacity: ({ children, onPress }) =>
      React.createElement('TouchableOpacity', { onPress }, children),
  };
});

const { Text, TouchableOpacity } = require('react-native');

function MockActivity7() {
  const [started, setStarted] = React.useState(false);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      TouchableOpacity,
      { onPress: () => setStarted(true) },
      React.createElement(Text, null, 'Start Test')
    ),
    started && React.createElement(Text, null, 'Breathing Started')
  );
}

test('user starts breathing activity', () => {
  let component;

  renderer.act(() => {
    component = renderer.create(React.createElement(MockActivity7));
  });

  const button = component.root.findByType(TouchableOpacity);

  renderer.act(() => {
    button.props.onPress();
  });

  const texts = component.root.findAllByType(Text);
  const textValues = texts.map((item) => item.props.children);

  expect(textValues).toContain('Breathing Started');
});