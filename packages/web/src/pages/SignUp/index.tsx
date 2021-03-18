import React, { useCallback, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { setError } from '../../store/actions/accountActions';

interface RegisterFormData {
  email: string;
  username: string;
  tag: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { register } = useAuth();
  const error = useSelector(
    (state: RootStateOrAny) => state.account.errorMessage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setError(''));
  }, []);

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
          <Form className="form">
            <h1 className="title">Create Account</h1>

            <Field
              className="field"
              name="email"
              autoComplete="off"
              placeholder="Email"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <Field
              className="field"
              name="username"
              autoComplete="off"
              placeholder="Username"
            />
            <ErrorMessage name="username">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <Field
              className="field"
              name="tag"
              autoComplete="off"
              placeholder="Tag"
            />
            <ErrorMessage name="tag">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <Field
              className="field"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <Field
              className="field"
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="password_confirm">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <div className="signin-div">
              Already have an account?
              <Link className="link" to="/signin">
                Sign-In
              </Link>
            </div>

            <button className="button" type="submit">
              Register
            </button>
          </Form>
        </Formik>
        <div>{error}</div>
      </Content>
    </Container>
  );
};

export default SignUp;
