import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <Content>
        <NavLink to="/">Home</NavLink>
        {!user ? (
          <div>
            <NavLink to="/signin">Login</NavLink>
            <NavLink to="/signup">Register</NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/" onClick={handleLogout}>
              Logout
            </NavLink>
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Navbar;
