import styled from 'styled-components';
import { shade, transparentize } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
`;

export const PostInput = styled.textarea`
  background: #ebebeb;
  color: black;
  height: 150px;
  width: 400px;
  padding: 8px;
  resize: none;
  border-radius: 10px;
  font-size: 18px;
`;

export const PostButton = styled.button`
  background: #3384d4;
  color: #fff;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background-color 0.3s;
  width: 150px;
  margin-top: 10px;

  &:hover {
    background: ${shade(0.2, '#3384d4')};
  }

  &:disabled {
    background: ${transparentize(0.4, '#3384d4')};
    cursor: default;
  }
`;
