import React from 'react';
import PropTypes from 'prop-types';
import { RegisterButtonStyle, RegisterButtonTextStyle } from './style';

export default function RegisterButton({ textName }) {
  return (
    <RegisterButtonStyle>
      <RegisterButtonTextStyle>{textName}</RegisterButtonTextStyle>
    </RegisterButtonStyle>
  );
}

RegisterButton.propTypes = {
  textName: PropTypes.string.isRequired,
};
