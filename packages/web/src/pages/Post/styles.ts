import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

export const PostInfo = styled.div`
  color: black;
  width: 500px;
  margin: 15px 0;
  padding: 20px;

  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;

  .user {
    display: flex;
    align-items: center;

    .user-info {
      display: flex;
      flex-direction: column;
      margin-left: 8px;

      .username {
        font-size: 22px;
      }

      .tag {
        font-size: 14px;
        font-weight: bold;
        color: #636363;
      }
    }
  }

  .post {
    border: 1px solid #bfbfbf;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 15px 10px 20px 10px;
    text-decoration: none;
    color: black;

    .content {
      margin: 10px 10px 10px 10px;

      &:last-child {
        font-weight: bold;
      }
    }
  }

  .like-button-div {
    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      padding: 15px 35px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  img {
    border-radius: 50%;
    border: 2px solid #666666;
    width: 120px;
    height: 120px;
  }
`;
