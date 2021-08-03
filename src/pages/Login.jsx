import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { Formik } from 'formik';

import FormikInputValue from '../components/FormikInputValue';
import { loginValidationSchema } from '../validations/login';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder='Email' />
            <FormikInputValue
              name='password'
              placeholder='Contraseña'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In' />
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
});

export default LoginPage;
