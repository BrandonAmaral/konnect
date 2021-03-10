import React, { ButtonHTMLAttributes, useCallback } from 'react';

import { Container } from './styles';
import useRequest from '../../hooks/useRequest';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  postid: string | undefined;
  change: () => void;
}

const DislikeButton: React.FC<ButtonProps> = (props) => {
  const dislikeRequest = useRequest({
    url: '/api/posts/dislike',
    method: 'put',
  });

  const dislike = useCallback(async () => {
    await dislikeRequest.makeRequest({}, `/${props.postid}`);
  }, []);

  const { change, ...rest } = props;

  return (
    <Container>
      <button
        onClick={() => {
          dislike();
          props.change();
        }}
        type="button"
        {...rest}
        {...change}
      />
    </Container>
  );
};

export default DislikeButton;
