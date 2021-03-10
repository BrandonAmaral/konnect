import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  width: 500px;
  margin-top: 30px;
`;

export const Post = styled.div`
  color: black;

  margin: 30px 0;
  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px #363636;
  padding: 10px;

  .user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .user-info {
      color: black;
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      text-decoration: none;

      .username {
        font-size: 20px;
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
      margin: 10px 0 10px 10px;

      &:last-child {
        font-weight: bold;
      }
    }
  }

  .like-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    .button {
      padding: 15px 35px;
    }
  }

  img {
    border-radius: 50%;
    border: 2px solid #666666;
    width: 70px;
    height: 70px;
  }

  &:first-child {
    margin-top: 0px;
  }
`;
