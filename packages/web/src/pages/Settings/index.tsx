import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';

import { Container, Content, Options } from './styles';
import useRequest from '../../hooks/useRequest';
import api from '../../api';
import Navbar from '../../components/Navbar';
import { userInfo } from '../../store/actions/accountActions';

interface UserData {
  _id?: string;
  username?: string;
  tag?: string;
  profilePicture?: string;
  following?: [];
  followers?: [];
}

const Settings: React.FC = () => {
  const info: UserData = useSelector(
    (state: RootStateOrAny) => state.account.userData,
  );
  const dispatch = useDispatch();

  const [username, setUsername] = useState(info.username);
  const [tag, setTag] = useState(info.tag);
  const [image, setImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem('@konnect:user')!);

  useEffect(() => {
    dispatch(userInfo(currentUser.tag));
  }, []);

  const changeInfoRequest = useRequest({
    url: '/api/users/change',
    method: 'patch',
  });

  const fileOnChange = useCallback(async (file) => {
    setImage(file.target.files[0]);
    setIsUploaded(true);
  }, []);

  const changeProfilePicture = useCallback(async () => {
    const formData = new FormData();
    formData.append('profilePicture', image!);
    await api({
      url: '/api/users/picture',
      method: 'patch',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('@konnect:token')}`,
      },
    });
    setImage(null);
  }, [image]);

  const changeInfo = useCallback(
    async (event) => {
      event.preventDefault();
      await changeInfoRequest.makeRequest({ username, tag });
      currentUser.username = username;
      currentUser.tag = tag;
      localStorage.setItem('@konnect:user', JSON.stringify(currentUser));
      dispatch(userInfo(currentUser.tag));
    },
    [username, tag, changeInfoRequest, currentUser],
  );

  return (
    <Container>
      <Navbar />
      <Content>
        <Options>
          {info.profilePicture && (
            <div className="infos">
              <label htmlFor="image">
                <img
                  src={`${process.env.REACT_APP_URL}/files/${info.profilePicture}`}
                  alt="pp"
                  className="pp"
                />
                <input type="file" id="image" hidden onChange={fileOnChange} />
              </label>
            </div>
          )}
          <form className="info-form" onSubmit={changeInfo}>
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
              spellCheck="false"
            />
            <input
              className="input"
              type="text"
              placeholder="Tag"
              value={tag || ''}
              onChange={(e) => setTag(e.target.value)}
              spellCheck="false"
            />
            {isUploaded ? (
              <button
                onClick={() => {
                  changeProfilePicture();
                  setIsUploaded(false);
                }}
                className="button"
                type="submit"
              >
                Save
              </button>
            ) : (
              <button className="button" type="submit">
                Save
              </button>
            )}
          </form>
        </Options>
      </Content>
    </Container>
  );
};

export default Settings;
