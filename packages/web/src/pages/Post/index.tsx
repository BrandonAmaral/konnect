import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, PostInfo } from './styles';
import Navbar from '../../components/Navbar/index';
import useRequest from '../../hooks/useRequest';
import { useAuth } from '../../hooks/useAuth';

interface PostParams {
  user: string;
  post: string;
}

interface PostData {
  user?: {
    _id: string;
    username: string;
    tag: string;
  };
  post?: {
    _id: string;
    slug: string;
    content: string;
    likes: [];
  };
}

const Post: React.FC = () => {
  const { user: userId, post: postId } = useParams<PostParams>();
  const { user } = useAuth();

  const [info, setInfo] = useState<PostData>({});

  const { makeRequest } = useRequest({
    method: 'get',
    url: `/api/posts/info/${userId}/${postId}`,
  });

  useEffect(() => {
    const getInfo = async () => {
      const data = await makeRequest();
      setInfo(data);
    };

    getInfo();
  }, []);

  return (
    <Container>
      <Navbar />
      <Content>
        {info.post && (
          <PostInfo>
            <div>{`${info.user?.username}`}</div>
            <div>{`${info.user?.tag}`}</div>
            <div>{`${info.post?.content}`}</div>
            {!(user._id in info.post.likes) ? (
              <button type="button">Like</button>
            ) : (
              <button type="button">Dislike</button>
            )}
            <div>{`Likes: ${info.post?.likes.length}`}</div>
          </PostInfo>
        )}
      </Content>
    </Container>
  );
};

export default Post;
