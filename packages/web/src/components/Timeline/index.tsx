import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Post } from './styles';
import useRequest from '../../hooks/useRequest';
import { useAuth } from '../../hooks/useAuth';

interface PostData {
  _id: string;
  likes: [];
  owner?: {
    _id?: string;
    username?: string;
    tag?: string;
  };
  content?: string;
  slug?: string;
}

type TimelineData = PostData[];

const Timeline: React.FC = () => {
  const [content, setContent] = useState<TimelineData>([]);
  const { user } = useAuth();

  const { makeRequest } = useRequest({
    url: '/api/posts/timeline',
    method: 'get',
  });

  useEffect(() => {
    makeRequest().then((response) => {
      setContent(response);
    });
  }, []);

  return (
    <Container>
      <Content>
        {content !== [] &&
          content.map((post) => (
            <Post key={post._id}>
              <Link to={`/${post.owner?.tag}/${post.slug}`}>
                <div>{post.owner?.username}</div>
                <div>{post.owner?.tag}</div>
                <div>{post.content}</div>
              </Link>
              {!(user._id in post.likes) ? (
                <button type="button">Like</button>
              ) : (
                <button type="button">Dislike</button>
              )}
              <div>{`Likes: ${post.likes.length}`}</div>
            </Post>
          ))}
      </Content>
    </Container>
  );
};

export default Timeline;
