import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';

import FormikInputValue from './FormikInputValue';
import { loginValidationSchema } from '../validations/login';

import StyledText from './StyledText';

const initialValues = {
  email: '',
  password: '',
};

const FORM_STATUS = {
  idle: 'idle',
  wrongCredentials: 'wrongCredentials',
};

const SignInForm = ({ handleSubmit, isSubmitting, status }) => {
  return (
    <View style={styles.form}>
      <FormikInputValue
        name='email'
        placeholder='Email'
        autoCapitalize='none'
        testID='LoginFormEmail'
      />
      <FormikInputValue
        name='password'
        placeholder='Contraseña'
        secureTextEntry
        testID='LoginFormPassword'
      />
      <Button
        disabled={isSubmitting}
        onPress={handleSubmit}
        title='Log In'
        testID='LoginFormSubmit'
      />
      {status === FORM_STATUS.wrongCredentials && (
        <StyledText style={styles.error}>Wrong Credentials</StyledText>
      )}
    </View>
  );
};

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      component={SignInForm}
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
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

export default LoginForm;
