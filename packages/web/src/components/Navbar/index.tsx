import React, { useCallback, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { Container, Content, Menu } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const [content, setContent] = useState('');

  const handleLogout = useCallback(() => {
    logout();
    window.scrollTo(0, 0);
  }, [logout]);

  const handleSearch = useCallback(
    async (event) => {
      event.preventDefault();

      if (content) {
        history.push(`/search/${content}`);
      }
    },
    [content],
  );

  return (
    <Container>
      <Content>
        <NavLink className="link" to="/home">
          Home
        </NavLink>
        <Menu>
          <form onSubmit={handleSearch}>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              className="bar"
              type="text"
              autoComplete="off"
              placeholder="Search"
            />
          </form>
          <NavLink className="link" to="/profile">
            Profile
          </NavLink>
          <NavLink className="link" to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </Menu>
      </Content>
    </Container>
  );
};

export default Navbar;
