import React from 'react';
import { Link } from 'react-router-dom';
import HomeBasic from '../Home/HomeBasic';
import { AppSubTitleStyle } from '../Home/HomeBasic/styles'
import BackArrow from '../../components/BackArrow/BackArrow';
import SignForm from '../../components/SignForm/SignForm';
import {pages} from '../../enumerators/enums'

function Register() {
  return (
    <>
      <HomeBasic/>
      <AppSubTitleStyle>
        Sign Up
      </AppSubTitleStyle>
      <SignForm />
      <Link to="/"> <BackArrow url={pages.home}/> </Link>
    </>
  );
}

export default Register;
