import React from 'react';
import { Text, View } from 'react-native';

import { render } from '@testing-library/react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text testID='greetingText'>Hello {name}</Text>
    </View>
  );
};

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    const { getByTestId, debug } = render(<Greeting name='midudev' />);
    debug();
    const el = getByTestId('greetingText');
    expect(el).toHaveTextContent('Hello midudev');
  });
});
