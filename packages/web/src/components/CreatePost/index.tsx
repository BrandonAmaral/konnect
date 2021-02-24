import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Content, PostInput, PostButton } from './styles';
import useRequest from '../../hooks/useRequest';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const history = useHistory();

  const { makeRequest } = useRequest({
    url: '/api/posts/create',
    method: 'post',
  });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await makeRequest({ content });
      history.go(0);
    },
    [content, makeRequest],
  );

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <PostInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            placeholder="What's happening?"
          />
          <PostButton>Send</PostButton>
        </form>
      </Content>
    </Container>
  );
};

export default CreatePost;
