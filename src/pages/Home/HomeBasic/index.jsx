import React, {useEffect, useState} from 'react';
import Logo from '../../../components/Logo/Logo';
import AppTitle from '../../../components/AppTitle/AppTitle';
import api from '../../../services/api';
import {pages} from '../../../enumerators/enums';
import { Navigate } from "react-router-dom";
import {writeLog} from '../../../utils/utils'

function HomeBasic() {  
  writeLog('Starting HomeBasic')
  const [isValid, setIsValid] = useState(false)
  function tokenExists(){
    return ("token" in localStorage && "userEmail" in localStorage)
  }
  useEffect(() => {
    const validateToken = async () =>{
      if (tokenExists()){
        const tokenIsValid = await api.userIsSigned()
        setIsValid(tokenIsValid)
      }
    };
    validateToken()
  }, []);
  if(isValid){
    return(
      <Navigate to={pages.projects} replace={true} />
    );
  } else {
    return (
      <>
        <Logo />
        <AppTitle data-page={pages.home} />
      </>
    );
  }
}

export default HomeBasic;
