import React from 'react';
import {BackArrowStyle, BackArrowContainer} from './style';
import BackArrowImg from './assets/images/svg/backArrow.svg';
import { Link } from 'react-router-dom';

function BackArrow(props) {
  const route = `/${props.url}`;
  return (
    <Link to={route}>
      <BackArrowContainer>
        <BackArrowStyle src={BackArrowImg} />
      </BackArrowContainer>
    </Link>
  )
}

export default BackArrow;
