import React from "react";
import { Link } from "react-router-dom";
import {pages} from "../../enumerators/enums";
import BackArrow from "../../components/BackArrow/BackArrow";
import AddProjectForm from "../../components/AddProjectForm/AddProjectForm";
import PageTitle from "../../components/AppTitle/PageTitle/PageTitle"
import {AddProjectStyle} from "./style"

function AddProject(){
  const pageTitle = "Add New Project"
  const titles = ["teste1", "teste2"]
  const page = pages.addProject
  return (
    <AddProjectStyle>
      <PageTitle titleName={"Project Tracker"} />
      <AddProjectForm/>
      <BackArrow url={pages.projects}/>
    </AddProjectStyle>
  )
}

export default AddProject;