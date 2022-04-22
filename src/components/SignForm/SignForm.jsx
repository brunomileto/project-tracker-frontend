import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {SignFormStyle, SignFormInputs, SignFormInput, SignFormSubmit} from './style';
import validator from 'validator';
import api from "../../services/api.js";
import utils from "../../utils/utils.js";
import { Navigate } from "react-router-dom";
import { pages } from '../../enumerators/enums';

function SignForm({isSignIn}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validateForm(){
    return(validator.isEmail(email) && email.length > 0 && password.length > 0)
  }

  async function handleSubmit(event){
    try {
      event.preventDefault();
      var success = false;
      if(isSignIn){
        success = await api.authenticate(email, password);
      } else {
        success = await api.createUser(email, password);
      }
      setSubmitted(success)

    } catch (error) {
      throw error;
    }
  }

  if(isSignIn){
    var mainLabel = 'Sign In'
    var buttonLabel = 'Login'
  } else {
    var mainLabel = 'Sign Up'
    var buttonLabel = 'Register'
  }

  if(submitted){
    return(
      <Navigate to={`/${pages.projects}`} replace={true} />
    )
  }

  return (
  <SignFormStyle>
    <form onSubmit={handleSubmit}>
      <SignFormInputs>
        <SignFormInput autoFocus type='email' onChange={(e) => setEmail(e.target.value)} value={email} id='email' placeholder='Email'/>
        <SignFormInput type='password' onChange={(e) => setPassword(e.target.value)} value={password} id='password' placeholder='Password'/>
      </SignFormInputs>
      <SignFormSubmit disabled={!validateForm()} type='submit'>
        {buttonLabel}
      </SignFormSubmit>
    </form>
  </SignFormStyle>)
};

SignForm.propTypes = {
  isSignIn: PropTypes.bool,
};

SignForm.defaultProps = {
  isSignIn: false,
};

export default SignForm;