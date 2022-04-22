import React from 'react';
import {SaveButtonStyle} from './style';

function SaveButton(props) {
  var disabled = props.disabled;
  return(
    <SaveButtonStyle disabled={disabled} type='submit'>
      Save
    </SaveButtonStyle>
  )
}

export default SaveButton;
