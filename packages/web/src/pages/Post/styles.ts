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
  margin-top: 15px;
  padding: 20px;

  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px #363636;

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

  .content {
    margin: 15px 0;
    display: flex;
    flex-direction: column;

    .likes {
      margin-top: 15px;
      font-size: 14px;
      font-weight: bold;
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
