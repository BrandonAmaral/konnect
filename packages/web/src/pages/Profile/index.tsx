import React, { useEffect, useState } from 'react';

import { Container, Content, Info } from './styles';
import { useAuth } from '../../hooks/useAuth';
import useRequest from '../../hooks/useRequest';
import Navbar from '../../components/Navbar/index';

interface UserData {
  _id?: string;
  username?: string;
  tag?: string;
  profilePicture?: string;
  following?: [];
  followers?: [];
}

const Profile: React.FC = () => {
  const { user } = useAuth();

  const [info, setInfo] = useState<UserData>({});

  const { makeRequest } = useRequest({
    method: 'get',
    url: `/api/users/info/${user._id}`,
  });

  useEffect(() => {
    const getInfo = async () => {
      const data = await makeRequest();
      setInfo(data);
    };

    getInfo();
  }, []);

  const followingCount = info.following?.length;
  const followersCount = info.followers?.length;

  return (
    <Container>
      <Navbar />
      <Content>
        <Info>
          <div>{`${info.username}`}</div>
          <div>{`${info.tag}`}</div>
          <div>{`Following: ${followingCount}`}</div>
          <div>{`Followers: ${followersCount}`}</div>
        </Info>
      </Content>
    </Container>
  );
};

export default Profile;
