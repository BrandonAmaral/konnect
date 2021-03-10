import styled from 'styled-components';
import image from '../../assets/header-background.jpg';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  height: 95vh;
  background: linear-gradient(
      to right bottom,
      rgba(50, 117, 194, 0.8),
      rgba(41, 131, 163)
    ),
    url(${image});
  background-position: top;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  .nav {
    display: flex;
    justify-content: flex-end;
    padding: 15px 0;
    margin: 0 10px;

    .menu {
      a {
        margin-left: 10px;
        padding: 5px 10px;
        border-radius: 15px;
        color: #fff;
        text-decoration: none;
        transition: background-color 0.2s;

        &:hover {
          background: #fff;
          color: black;
        }
      }
    }
  }

  .welcome {
    color: #fff;
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);

    @keyframes moveRight {
      0% {
        opacity: 0;
        transform: translate(-20%, -50%);
      }

      100% {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }

    animation: moveRight 1s ease-out;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 70px 0;

  .title {
    color: #2966a3;
    margin: 0 10px;
  }

  .mern {
    margin-top: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
