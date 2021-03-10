import React, { ButtonHTMLAttributes, useCallback } from 'react';

import { Container } from './styles';
import useRequest from '../../hooks/useRequest';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  postid: string | undefined;
  change: () => void;
}

const LikeButton: React.FC<ButtonProps> = (props) => {
  const likeRequest = useRequest({ url: '/api/posts/like', method: 'put' });

  const like = useCallback(async () => {
    await likeRequest.makeRequest({}, `/${props.postid}`);
  }, []);

  const { change, ...rest } = props;

  return (
    <Container>
      <button
        onClick={() => {
          like();
          props.change();
        }}
        type="button"
        {...rest}
        {...change}
      />
    </Container>
  );
};

export default LikeButton;
