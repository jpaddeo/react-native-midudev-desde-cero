import React from 'react';
import { useHistory } from 'react-router-native';

import useSignIn from '../hooks/useSignIn';

import LoginForm, { FORM_STATUS } from '../components/LoginForm';

const LoginPage = () => {
  const { signIn } = useSignIn();
  const history = useHistory();

  const handleFormikSubmit = async (values, actions) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { email, password } = values;
      await signIn({ username: email, password });
      actions.setSubmitting(false);
      history.push('/');
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials);
    }
  };
  return <LoginForm onSubmit={handleFormikSubmit} />;
};

export default LoginPage;
