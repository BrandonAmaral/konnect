import React, { useEffect, useState } from 'react';

import { Container, Content, Post } from './styles';
import useRequest from '../../hooks/useRequest';

interface PostData {
  _id: string;
  owner?: {
    _id?: string;
    username?: string;
    tag?: string;
  };
  content?: string;
}

type TimelineData = PostData[];

const Timeline: React.FC = () => {
  const [content, setContent] = useState<TimelineData>([]);

  const { makeRequest } = useRequest({
    url: '/api/posts/timeline',
    method: 'get',
  });

  useEffect(() => {
    const getTimeline = async () => {
      const data = await makeRequest();

      setContent(data);
    };

    getTimeline();
  }, []);

  return (
    <Container>
      <Content>
        {content.map((post) => (
          <Post key={post._id}>
            <div className="user">
              <ul>
                <li>
                  <strong>{post.owner?.username}</strong>
                </li>
                <li>{`@${post.owner?.tag}`}</li>
              </ul>
            </div>
            <div className="post">
              <ul>
                <li>{post.content}</li>
              </ul>
            </div>
          </Post>
        ))}
      </Content>
    </Container>
  );
};

export default Timeline;
