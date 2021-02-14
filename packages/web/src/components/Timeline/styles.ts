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

  &:first-child {
    margin-top: 0px;
  }

  .user {
    font-size: 14px;

    ul {
      list-style: none;
    }

    strong {
      font-size: 20px;
    }
  }

  .post {
    margin-top: 10px;
    font-size: 16px;

    ul {
      list-style: none;
      word-wrap: break-word;
    }
  }
`;
