import React from 'react';
import { Link } from 'react-router-dom';
import HomeBasic from '../Home/HomeBasic';
import { AppSubTitleStyle } from '../Home/HomeBasic/styles'
import BackArrow from '../../components/BackArrow/BackArrow';
import SignForm from '../../components/SignForm/SignForm';
import {pages} from '../../enumerators/enums';

function Login() {
  return (
    <>
      <HomeBasic/>
      <AppSubTitleStyle>
        Sign In
      </AppSubTitleStyle>
      <SignForm isSignIn />
      <BackArrow url={pages.home}/>
    </>
  );
}

export default Login;
