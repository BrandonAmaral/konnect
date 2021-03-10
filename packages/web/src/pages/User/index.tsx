import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { Container, Content, Info, Button } from './styles';
import { useAuth } from '../../hooks/useAuth';
import useRequest from '../../hooks/useRequest';
import Navbar from '../../components/Navbar/index';

interface UserData {
  _id?: string;
  username?: string;
  tag?: string;
  profilePicture?: string;
  following?: [];
  followers?: [user_data: { _id: string }];
}

interface UserParam {
  user: string;
}

const User: React.FC = () => {
  const { user } = useAuth();
  const { user: param } = useParams<UserParam>();

  const [info, setInfo] = useState<UserData>({});
  const [change, setChange] = useState(true);

  const { makeRequest } = useRequest({
    method: 'get',
    url: `/api/users/info/${param}`,
  });

  const followRequest = useRequest({ url: '/api/users/follow', method: 'put' });
  const unfollowRequest = useRequest({
    url: '/api/users/unfollow',
    method: 'put',
  });

  const follow = useCallback(async (id) => {
    await followRequest.makeRequest({}, `/${id}`);
    setChange(true);
  }, []);
  const unfollow = useCallback(async (id) => {
    await unfollowRequest.makeRequest({}, `/${id}`);
    setChange(true);
  }, []);

  useEffect(() => {
    if (!(param === user.tag)) {
      if (change) {
        makeRequest().then((response) => {
          setInfo(response);
          setChange(false);
        });
      }
    }
  }, [makeRequest]);

  if (param === user.tag) {
    return <Redirect to="/profile" />;
  }

  const followButton = (
    <Button
      className="follow-button"
      key={info._id}
      onClick={() => follow(info._id)}
      type="button"
    >
      Follow
    </Button>
  );
  const unfollowButton = (
    <Button
      className="follow-button"
      key={info._id}
      onClick={() => unfollow(info._id)}
      type="button"
    >
      Unfollow
    </Button>
  );

  return (
    <Container>
      <Navbar />
      <Content>
        {info._id && (
          <Info key={info.followers?.length}>
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
            <div className="follow-button-div">
              {!info.followers?.length && followButton}
              {info.followers?.map((follower) =>
                !(user._id === follower._id) ? followButton : unfollowButton,
              )}
            </div>
          </Info>
        )}
      </Content>
    </Container>
  );
};

export default User;
