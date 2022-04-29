import React, {useState, useEffect} from "react";
import {pages} from "../../enumerators/enums";
import { ProjectsStyle } from "./style.js"
import ListHeader from "../../components/ListHeader/ListHeader"
import PageTitle from "../../components/AppTitle/PageTitle/PageTitle";
import ScrollList from "../../components/ScrollList/ScrollList";
import api from "../../services/api";
import {timeToStr} from '../../utils/utils'
import Exit from '../../components/ExitBtn/Exit'


function Projects(){  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      var response = await api.getAllProjects()
      if(response.success){
        var projects = []
        response.data.forEach(project => {
          var hours = timeToStr(project.currentHours.hours)
          var minutes = timeToStr(project.currentHours.minutes)
          var seconds = timeToStr(project.currentHours.seconds)
          projects.unshift({"name": project.name, "uid": project.uid,
          "time": `${hours}:${minutes}:${seconds}`})
          })
          setItems(projects)
      }
    };
    getProjects()
  }, []);
  
  return(
    <>
      <PageTitle titleName={"Project Tracker"} />
      <ProjectsStyle >
        <ListHeader pageName={pages.projects}/>
        <ScrollList page={pages.projects} items={items} />
        <Exit/>
      </ProjectsStyle>
    </>
  )
}

export default Projects;