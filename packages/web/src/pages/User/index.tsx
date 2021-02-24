import React, { useEffect, useRef, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

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

interface UserParam {
  user: string;
}

const User: React.FC = () => {
  const { user } = useAuth();
  const { user: param } = useParams<UserParam>();
  const isMounted = useRef(true);

  const [info, setInfo] = useState<UserData>({});

  const { makeRequest } = useRequest({
    method: 'get',
    url: `/api/users/info/${param}`,
  });

  useEffect(() => {
    if (!(param === user.tag)) {
      makeRequest().then((response) => {
        setInfo(response);
      });
    }
  }, []);

  if (param === user.tag) {
    return <Redirect to="/profile" />;
  }

  const followingCount = info.following?.length;
  const followersCount = info.followers?.length;

  return (
    <Container>
      <Navbar />
      <Content>
        {info._id && (
          <Info>
            <div>{`${info.username}`}</div>
            <div>{`${info.tag}`}</div>
            <div>{`Following: ${followingCount}`}</div>
            <div>{`Followers: ${followersCount}`}</div>
          </Info>
        )}
      </Content>
    </Container>
  );
};

export default User;
