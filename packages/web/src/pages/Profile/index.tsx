import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Info } from './styles';
import Navbar from '../../components/Navbar';
import { userInfo } from '../../store/actions/accountActions';
import pencil from '../../assets/pencil.png';

interface UserData {
  _id?: string;
  username?: string;
  tag?: string;
  profilePicture?: string;
  following?: [];
  followers?: [];
}

const Profile: React.FC = () => {
  const info: UserData = useSelector(
    (state: RootStateOrAny) => state.account.userData,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('@konnect:user')!);
    dispatch(userInfo(currentUser.tag));
  }, []);

  return (
    <Container>
      <Navbar />
      <Content>
        {info._id && (
          <Info>
            <div className="edit">
              <Link className="link" to="/settings">
                <img src={pencil} alt="" />
              </Link>
            </div>
            <div className="image">
              <img
                src={`${process.env.REACT_APP_URL}/files/${info.profilePicture}`}
                alt="pp"
              />
            </div>
            <div className="user-info">
              <span className="username">{`${info.username}`}</span>
              <span className="tag">{`@${info.tag}`}</span>
            </div>
            <div className="follow">
              <span>{`Following: ${info.following?.length}`}</span>
              <span>{`Followers: ${info.followers?.length}`}</span>
            </div>
          </Info>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
