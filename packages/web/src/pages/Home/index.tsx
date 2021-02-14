import React from 'react';

import { Container, Content } from './styles';
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import Timeline from '../../components/Timeline';

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Post />
        <Timeline />
      </Content>
    </Container>
  );
};

export default Home;
