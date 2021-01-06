import React, { useCallback, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';

interface RegisterFormData {
  email: string;
  username: string;
  tag: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register, validationError, clearError } = useAuth();

  useEffect(() => {
    clearError();
  }, [clearError]);

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      register({
        email: data.email,
        username: data.username,
        tag: data.tag,
        password: data.password,
      });
    },
    [register],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    username: Yup.string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 characters'),
    tag: Yup.string()
      .required('Tag is required')
      .min(4, 'Tag must be at least 4 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    password_confirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match',
    ),
  });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            username: '',
            tag: '',
            password: '',
            confirm_password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnMount={false}
          validateOnChange={false}
        >
          <Form>
            <Field name="email" autoComplete="off" />
            <ErrorMessage name="email" />

            <Field name="username" autoComplete="off" />
            <ErrorMessage name="username" />

            <Field name="tag" autoComplete="off" />
            <ErrorMessage name="tag" />

            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <Field name="confirm_password" type="password" />
            <ErrorMessage name="password_confirm" />

            <Link to="/signin">Already have an account?</Link>

            <button type="submit">Register</button>
            <div>{validationError}</div>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default SignUp;
