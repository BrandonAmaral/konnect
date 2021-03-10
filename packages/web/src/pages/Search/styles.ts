import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em 0;

  color: black;

  img {
    border-radius: 50%;
    border: 2px solid #666666;
    width: 90px;
    height: 90px;
  }
`;

export const Users = styled.div`
  width: 500px;
  height: 100%;
  margin: 15px 0;

  .user {
    border: 1px solid #e0e0e0;
    background: #ebebeb;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 0px #363636;
    display: flex;
    align-items: center;
    text-decoration: none;

    .image {
      display: flex;
      margin: 10px 0 10px 10px;
    }

    .user-info {
      display: flex;
      flex-direction: column;
      color: black;
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
`;

export const Posts = styled.div`
  width: 500px;
  height: 100%;
  margin: 15px 0;

  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px #363636;

  .post {
    text-decoration: none;

    .content {
      margin-left: 5px;
      color: black;
    }

    .user {
      display: flex;
      align-items: center;
      text-decoration: none;

      .image {
        display: flex;
        margin: 10px 0 10px 10px;
      }

      .user-info {
        display: flex;
        flex-direction: column;
        color: black;
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
  }
`;
