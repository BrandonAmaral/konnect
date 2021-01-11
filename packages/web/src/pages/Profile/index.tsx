import React from 'react';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';
import Navbar from '../../components/Navbar/index';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Content>
        <Navbar />
        {`${user.username}`}
      </Content>
    </Container>
  );
};

export default Profile;
