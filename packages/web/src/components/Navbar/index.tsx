import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Menu } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <Content>
        <NavLink className="link" to="/home">
          Home
        </NavLink>
        {!user ? (
          <Menu>
            <NavLink className="link" to="/signin">
              Login
            </NavLink>
            <NavLink className="link" to="/signup">
              Register
            </NavLink>
          </Menu>
        ) : (
          <Menu>
            <NavLink className="link" to="/profile">
              Profile
            </NavLink>
            <NavLink className="link" to="/home" onClick={handleLogout}>
              Logout
            </NavLink>
          </Menu>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
