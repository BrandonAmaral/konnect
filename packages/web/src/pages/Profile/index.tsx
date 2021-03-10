import React, { useEffect, useState } from 'react';

import { Container, Content, Info } from './styles';
import { useAuth } from '../../hooks/useAuth';
import useRequest from '../../hooks/useRequest';
import Navbar from '../../components/Navbar';

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
    url: `/api/users/info/${user.tag}`,
  });

  useEffect(() => {
    makeRequest().then((data) => setInfo(data));
  }, []);

  return (
    <Container>
      <Navbar />
      <Content>
        {info._id && (
          <Info>
            <img
              src={`${process.env.REACT_APP_URL}/files/${info.profilePicture}`}
              alt="pp"
            />
            <div className="user-info">
              <span className="username">{`${info.username}`}</span>
              <span className="tag">{`@${info.tag}`}</span>
            </div>
            <div className="follow">
              <span>{`Following: ${info.following?.length}`}</span>
              <span>{`Followers: ${info.followers?.length}`}</span>
            </div>
          </Info>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
