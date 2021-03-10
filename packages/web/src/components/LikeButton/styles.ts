import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #3384d4;
    width: 100%;
    height: 25px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#3384d4')};
    }
  }
`;
