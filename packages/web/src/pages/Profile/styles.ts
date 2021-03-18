import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;

  color: black;
`;

export const Info = styled.div`
  padding: 20px;
  border: 1px solid #e0e0e0;
  background: #ebebeb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;

  .edit {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .link {
      display: flex;
    }

    img {
      width: 30px;
      height: 30px;
      background: #598dc9;
      object-fit: fill;
    }
  }

  img {
    border-radius: 50%;
    border: 2px solid #666666;
    width: 250px;
    height: 250px;
    object-fit: fill;
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
