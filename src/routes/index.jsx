import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

import Home from '../pages/Home/HomeBasic/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddProject from '../pages/AddProject';
import AddTask from '../pages/AddTask';
import Projects from '../pages/Projects';
import Tasks from '../pages/Tasks';
import Cron from '../pages/Cron';
import {pages} from '../enumerators/enums'

function Routes() {
  return (
    <RoutesDOM>
      <Route path={`/`} element={<Home />} />
      <Route path={`/${pages.projects}`} element={<Projects />} />
      <Route path={`/${pages.login}`} element={<Login />} />
      <Route path={`/${pages.register}`} element={<Register />} />
      <Route path={`/${pages.addProject}`} element={<AddProject/>} />
      <Route path={`/${pages.tasks}`} element={<Tasks/>} />
      <Route path={`/${pages.addTask}`} element={<AddTask/>} />
      <Route path={`/${pages.cron}`} element={<Cron/>} />
    </RoutesDOM>
  );
};

export default Routes;


