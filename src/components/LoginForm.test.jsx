import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import LoginForm from '../components/LoginForm';

describe('LoginForm', () => {
  it('calls onSbumit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn(); // crea una función mock function. Permite saber cuántas veces se invocó, etc.
    const { getByTestId } = render(<LoginForm onSubmit={onSubmit} />);

    fireEvent.changeText(getByTestId('LoginFormEmail'), 'midudev@gmail.com');
    fireEvent.changeText(getByTestId('LoginFormPassword'), '123456');
    fireEvent.press(getByTestId('LoginFormSubmit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);

      const {
        mock: { calls },
      } = onSubmit;
      const [firstCall] = calls;
      const [firstArg] = firstCall;

      expect(firstArg).toEqual({
        email: 'midudev@gmail.com',
        password: '123456',
      });
    });
  });
});
