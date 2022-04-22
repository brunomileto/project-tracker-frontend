import React from 'react';
import { TitleStyle } from './style';

function PageTitle(props) {
  const titleName = props.titleName;
  return <TitleStyle>{props.titleName}</TitleStyle>
}
export default PageTitle;
