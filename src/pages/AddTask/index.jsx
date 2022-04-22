import React from "react";
import { Link } from "react-router-dom";
import {pages} from "../../enumerators/enums";
import BackArrow from "../../components/BackArrow/BackArrow";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
import PageTitle from "../../components/AppTitle/PageTitle/PageTitle"
import {AddTaskStyle} from "./style"

function AddTask(){
  return (
    <AddTaskStyle>
      <PageTitle titleName={"Project Tracker"} />
      <AddTaskForm/>
      <BackArrow url={pages.projects}/>
    </AddTaskStyle>
  )
}

export default AddTask;