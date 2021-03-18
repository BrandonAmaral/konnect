import React, { useCallback, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';
import { setError } from '../../store/actions/accountActions';

interface LoginFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const error = useSelector(
    (state: RootStateOrAny) => state.account.errorMessage,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setError(''));
  }, []);

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
          <Form className="form">
            <h1 className="title">Welcome!</h1>

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
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            {error && <div className="server-error">{error}</div>}

            <div className="signup-div">
              New to Konnect?
              <Link className="link" to="/signup">
                Register
              </Link>
            </div>

            <button className="button" type="submit">
              Enter
            </button>
          </Form>
        </Formik>
      </Content>
    </Container>
  );
};

export default SignIn;
