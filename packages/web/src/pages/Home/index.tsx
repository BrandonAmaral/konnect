import React from 'react';

import { Container, Content } from './styles';
import Navbar from '../../components/Navbar';
import CreatePost from '../../components/CreatePost';
import Timeline from '../../components/Timeline';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <CreatePost />
        <Timeline />
      </Content>
    </Container>
  );
};

export default Home;
