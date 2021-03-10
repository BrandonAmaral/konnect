import React, { useCallback } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';

interface LoginFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { login } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      login({
        email: data.email,
        password: data.password,
      });
    },
    [login],
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            email: '',
            password: '',
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

            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <Link to="/signup">Register</Link>

            <button type="submit">Enter</button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default SignIn;
