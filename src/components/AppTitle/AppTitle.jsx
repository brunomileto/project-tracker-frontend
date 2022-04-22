import React from 'react';
import PropTypes from 'prop-types';
import {pages} from '../../enumerators/enums.js'
import { AppTitleStyle, AppTitleStyleHome } from './style';

function AppTitle(props) {
  const enumPages = props.page;
  if (enumPages == pages.home) {
    return <AppTitleStyleHome>Project Tracker</AppTitleStyleHome>;
  } else if (enumPages == pages.main){
    return <AppTitleStyle>Project Tracker</AppTitleStyle>
  } else
  return <AppTitleStyle>Project Tracker</AppTitleStyle>;
}
export default AppTitle;