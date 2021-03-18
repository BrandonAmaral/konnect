import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebebeb;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  width: 500px;

  label {
    width: 100px;
    height: 100px;
  }

  .pp {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: fill;
    border: 2px solid #666666;
    cursor: pointer;
  }

  .info-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .input {
      border: 1px solid black;
      border-radius: 6px;
      font-size: 16px;
      margin: 10px 0;
      padding: 5px;
      width: 50%;

      &:first-child {
        margin-top: 25px;
      }
    }

    .button {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3384d4;
      width: 100%;
      height: 35px;
      border-radius: 5px;
      transition: background-color 0.3s;
      width: 50%;
      margin-top: 20px;

      &:hover {
        background: ${shade(0.2, '#3384d4')};
      }
    }
  }
`;
