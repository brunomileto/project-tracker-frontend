import React, {useEffect, useState} from "react";
import {pages} from "../../enumerators/enums";
import {ListHeaderAdd, ListHeaderTitle, ListHeaderStyle} from './style'
import { Link } from 'react-router-dom';

function ListHeader(props){
  var isProjects = props.pageName == pages.projects
  var addRoute = isProjects ? `/${pages.addProject}` : `/${pages.addTask}`;
  return(
  <ListHeaderStyle>
    <ListHeaderTitle>{isProjects ? "Projetos" : "Atividades"}</ListHeaderTitle>
    <Link  style={{ textDecoration: 'none' }} to={addRoute}>
      <ListHeaderAdd>{isProjects ? "Novo Projeto" : "Nova Atividade"}</ListHeaderAdd>
    </Link>
  </ListHeaderStyle>
  )
}

export default ListHeader;