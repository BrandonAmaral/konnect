import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 600px;
  margin-top: 30px;
`;

export const Post = styled.div`
  color: #fff;

  border: 1px solid #454545;
  border-radius: 6px;
  padding: 10px;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;

  a {
    text-decoration: none;
    color: #fff;
  }

  &:first-child {
    margin-top: 0px;
  }
`;
