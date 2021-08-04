import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useHistory } from 'react-router-native';

import { Formik } from 'formik';

import FormikInputValue from '../components/FormikInputValue';
import { loginValidationSchema } from '../validations/login';

import useSignIn from '../hooks/useSignIn';
import StyledText from '../components/StyledText';

const initialValues = {
  email: '',
  password: '',
};

const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials',
};

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
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={handleFormikSubmit}
    >
      {({ handleSubmit, isSubmitting, status }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='Email'
              autoCapitalize='none'
            />
            <FormikInputValue
              name='password'
              placeholder='Contraseña'
              secureTextEntry
            />
            <Button
              disabled={isSubmitting}
              onPress={handleSubmit}
              title='Log In'
            />
            {status === FORM_STATUS.wrongCredentials && (
              <StyledText style={styles.error}>Wrong Credentials</StyledText>
            )}
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default LoginPage;
