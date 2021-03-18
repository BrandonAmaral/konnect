import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: black;
`;

export const Info = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px #363636;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  img {
    border-radius: 50%;
    border: 2px solid #666666;
    width: 300px;
    height: 300px;
    object-fit: fill;
  }

  .follow-button-div {
    margin-top: 20px;

    .follow-button {
      color: #fff;
      display: flex;
      justify-content: center;
      padding: 15px;
      align-items: center;
      background: #3384d4;
      width: 100%;
      height: 25px;
      border-radius: 10px;
      transition: background-color 0.3s;

      &:hover {
        background: ${shade(0.2, '#3384d4')};
      }
    }
  }

  .follow {
    margin-top: 25px;
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .username {
      margin-top: 30px;
      font-size: 22px;
    }

    .tag {
      font-size: 14px;
      font-weight: bold;
      color: #636363;
    }
  }
`;

export const Button = styled.button``;
