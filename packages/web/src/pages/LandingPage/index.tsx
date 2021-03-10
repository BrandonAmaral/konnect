import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Header, Technologies } from './styles';
import mern from '../../assets/mern.png';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="nav">
          <div className="menu">
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
        <h1 className="welcome">WELCOME TO MY SOCIAL MEDIA PROJECT!</h1>
      </Header>
      <Technologies>
        <h1 className="title">
          I have used the MERN stack (MongoDB, Express, React and Node.js) to
          create this website.
        </h1>
        <img className="mern" src={mern} alt="mern" />
      </Technologies>
      <Content>Test</Content>
    </Container>
  );
};

export default LandingPage;
