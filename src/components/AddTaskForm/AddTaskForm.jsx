import React, {useEffect, useState, useRef} from "react";
import api from "../../services/api.js";
import { Navigate } from "react-router-dom";
import {AddTaskWrapper, AddTaskContainerStyle, AddTaskStyle, AddTaskTitleStyle, BasicInputStyle, SaveButtonStyle, TitleStyle} from "./style";
import { pages } from "../../enumerators/enums.js";

function AddTaskForm() {
  const [projectName, setProjectName] = useState("");
  const [projectId, setProjectId] = useState("");
  useEffect(() => {
    const getProject = async () => {
      var response = await api.getProject()
      if(response.success){
        setProjectName(response.data.name)
        setProjectId(response.data.uid)
      }
    };
    getProject()
  }, []);
  
  const [taskName, setTaskName] = useState("");
  const [taskId, setTaskId] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event){
    try {
      event.preventDefault();
      if (!validateForm())
        return
      var success = await api.createTask(getFormData(), projectId);
      setSubmitted(success)

    } catch (error) {
      throw error;
    }
  }

  function getFormData() {
    return {customId: taskId, name: taskName, projectName:projectName, description:description}
  }

  function validateForm(){
    var isValid = (taskName != "" && projectName != "")
    return isValid
  }

  if(submitted){
    return(
      <Navigate to={`/${pages.tasks}`} replace={true} />
    )
  }
  
  return(
    <AddTaskStyle>
      <AddTaskTitleStyle>Criar Atividade</AddTaskTitleStyle>
      <AddTaskWrapper>
        <form onSubmit={handleSubmit}>
          <AddTaskContainerStyle>
            <TitleStyle>NOME DO PROJETO</TitleStyle>
            <BasicInputStyle type='text' disabled value={projectName} id='projectName'/>
          </AddTaskContainerStyle>

          <AddTaskContainerStyle>
            <TitleStyle>NOME DA TAREFA*</TitleStyle>
            <BasicInputStyle type='text' onChange={(e) => setTaskName(e.target.value)} value={taskName} id='taskName' placeholder="Nome da Tarefa"/>
          </AddTaskContainerStyle>

          <AddTaskContainerStyle>
            <TitleStyle>DESCRIÇÃO</TitleStyle>
            <BasicInputStyle type='text' onChange={(e) => setDescription(e.target.value)} value={description} id='description' placeholder="Descrição da tarefa" />
          </AddTaskContainerStyle>
          
          <SaveButtonStyle type="submit">Save</SaveButtonStyle>
        </form>
      </AddTaskWrapper>
    </AddTaskStyle>)
}

export default AddTaskForm;