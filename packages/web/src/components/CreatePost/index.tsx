import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Content, PostInput, PostButton } from './styles';
import useRequest from '../../hooks/useRequest';
import { fetch } from '../../store/actions/timelineActions';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const { makeRequest } = useRequest({
    url: '/api/posts/create',
    method: 'post',
  });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      await makeRequest({ content });
      dispatch(fetch());
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
          {content ? (
            <PostButton>Send</PostButton>
          ) : (
            <PostButton disabled>Send</PostButton>
          )}
        </form>
      </Content>
    </Container>
  );
};

export default CreatePost;
