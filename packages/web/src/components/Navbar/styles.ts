import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  background: #0d0d0d;
  display: flex;
  justify-content: space-between;

  .link {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
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
`;
