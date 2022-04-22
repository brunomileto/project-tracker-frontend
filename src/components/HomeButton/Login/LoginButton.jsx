import React from 'react';
import PropTypes from 'prop-types';
import { LoginButtonStyle, LoginButtonTextStyle } from './style';

export default function LoginButton({ textName }) {
  return (
    <LoginButtonStyle>
      <LoginButtonTextStyle>{textName}</LoginButtonTextStyle>
    </LoginButtonStyle>
  );
}

LoginButton.propTypes = {
  textName: PropTypes.string.isRequired,
};
