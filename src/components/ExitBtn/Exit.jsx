import React, { useState } from 'react';
import {BackArrowStyle, BackArrowContainer} from './style';
import { Link } from 'react-router-dom';
import {pages} from '../../enumerators/enums'
import BackArrowImg from './assets/images/svg/backArrow.svg';

function Exit() {
  const route = `${pages.home}`;
  return (
    <Link to={route}>
      <BackArrowContainer onClick={()=>{localStorage.clear()}}>
      <BackArrowStyle src={BackArrowImg} />
      </BackArrowContainer>
    </Link>
  )
}

export default Exit;
