import React from 'react';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../../components/Navbar/index';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <Navbar />
        {user ? (
          <div>{`Welcome ${user.username}!`}</div>
        ) : (
          <div>Welcome Guest!</div>
        )}
      </Content>
    </Container>
  );
};

export default Home;
