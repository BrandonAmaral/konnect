import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  background: #2966a3;
  display: flex;
  justify-content: space-between;

  .link {
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;
    padding: 10px;

    &:first-child {
      margin-left: 10px;
    }

    &:last-child {
      margin-right: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  .bar {
    height: 25px;
    border-radius: 5px;
    margin-right: 10px;
    padding-left: 4px;
  }
`;
