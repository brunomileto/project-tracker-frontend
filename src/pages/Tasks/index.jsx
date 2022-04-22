import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import {pages, locStorage} from "../../enumerators/enums";
import { TaskSyle } from "./style.js"
import ListHeader from "../../components/ListHeader/ListHeader"
import PageTitle from "../../components/AppTitle/PageTitle/PageTitle";
import ScrollList from "../../components/ScrollList/ScrollList";
import BackArrow from "../../components/BackArrow/BackArrow";
import api from "../../services/api";
function Tasks(){  
  const location = useLocation();
  var uid = location.state;
  if (uid == null || typeof(uid) == 'undefined' || uid == ""){
    uid = localStorage.getItem(locStorage.projectId)
  }
  else{
    localStorage.setItem(locStorage.projectId, uid);
  }
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      // make the request here
      var response = await api.getAllTasks(uid)
      if(response.success){
        var tasks = []
        response.data.forEach(task => {
          tasks.unshift({"name": task.name, "uid": task.uid,
          "time": `${task.currentHours.hours}:${task.currentHours.minutes}:${task.currentHours.seconds}`})
          })
          setItems(tasks)
      }
    };
    getTasks()
  }, []);

  return(
    <>
      <PageTitle titleName={"Project Tracker"} />
      <TaskSyle >
        <ListHeader pageName={pages.tasks}/>
        <ScrollList page={pages.tasks} items={items} />
        <BackArrow url={pages.projects}/>
      </TaskSyle>
    </>
  )
}

export default Tasks;