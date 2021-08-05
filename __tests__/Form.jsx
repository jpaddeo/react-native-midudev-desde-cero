import { fireEvent } from '@testing-library/react-native';
import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';

import { render } from '@testing-library/react-native';

const Form = ({ onSubmit }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUserName(text)}
          placeholder='Username'
          testID='usernameField'
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          placeholder='Password'
          testID='passwordField'
          secureTextEntry
        />
      </View>
      <View>
        <TouchableWithoutFeedback onPress={handleSubmit} testID='submitButton'>
          <Text>Submit</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn(); // crea una función mock function. Permite saber cuántas veces se invocó, etc.
    const { getByTestId } = render(<Form onSubmit={onSubmit} />);
    fireEvent.changeText(getByTestId('usernameField'), 'midudev');
    fireEvent.changeText(getByTestId('passwordField'), '123456');
    fireEvent.press(getByTestId('submitButton'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    const {
      mock: { calls },
    } = onSubmit;
    const [firstCall] = calls;
    const [firstArg] = firstCall;

    expect(firstArg).toEqual({ username: 'midudev', password: '123456' });
  });
});
