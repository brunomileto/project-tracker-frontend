import React from 'react';
import { AppSubTitleStyle } from '../styles';
import HomeButton from '../../../../components/HomeButton/HomeButton';
import HomeBasic from '../index';

function HomePage() {
  return (
    <>
      <HomeBasic />
      <AppSubTitleStyle>
        Track your projects. Discover how much time you spent on your tasks!
      </AppSubTitleStyle>
      <HomeButton />
    </>
  );
}

export default HomePage;

