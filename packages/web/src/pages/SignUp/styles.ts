import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  background: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #e0e0e0;
  width: 40%;
  height: 90%;
  border-radius: 20px;
  padding: 70px;

  .form {
    display: flex;
    flex-direction: column;

    .title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 22px;
    }

    .field {
      height: 35px;
      background: #d6d6d6;
      border-radius: 10px;
      font-size: 20px;
      padding-left: 6px;
      margin: 10px 0;
    }

    .button {
      color: #fff;
      font-size: 18px;
      background: #3384d4;
      border-radius: 8px;
      height: 40px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#3384d4')};
      }
    }

    .error {
      color: red;
      margin: -5px 0 0 5px;
    }

    .signin-div {
      margin: 25px 0 10px 5px;

      .link {
        text-decoration: none;
        color: #2378cc;
        margin-left: 5px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
