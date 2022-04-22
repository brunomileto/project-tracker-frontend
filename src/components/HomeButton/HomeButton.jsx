import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Login/LoginButton';
import RegisterButton from './SignUp/SignUpButton';
import { HomeContainerStyle } from './style';

function HomeButton() {
  return (
    <HomeContainerStyle>
      <Link to="/register">
        <RegisterButton textName="Sign Up" />
      </Link>
      <Link to="/login">
        <LoginButton textName="Login" />
      </Link>
    </HomeContainerStyle>
  );
}

export default HomeButton;
