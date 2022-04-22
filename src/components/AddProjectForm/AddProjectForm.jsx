import React, {useEffect, useState, useRef} from "react";
import validator from "validator";
import api from "../../services/api.js";
import utils from "../../utils/utils.js";
import { Navigate } from "react-router-dom";
import {AddProjectWrapper, AddProjectContainerStyle, AddProjectStyle, AddProjectTitleStyle, BasicInputStyle, SaveButtonStyle, TitleStyle} from "./style";
import DateInput from "../DateInput/DateInput"
import Project from "../../models/project.models"
import CurrentHours from "../../models/currentHours.models.js";

function AddProjectForm(props) {
  const [projectName, setProjectName] = useState("");
  const [date, setDate] = useState('');
  const [initialEstimatedHours, setInitialEstimatedHours] = useState("");
  const [projectId, setProjectId] = useState("");
  const [description, setDescription] = useState("");
  const handleInput = ({ target: { value } }) => setDate(value);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event){
    try {
      event.preventDefault();
      if (!validateForm())
        return
      var success = await api.createProject(getFormData());
      setSubmitted(success)

    } catch (error) {
      throw error;
    }
  }

  function getFormData() {
    return {customId: projectId, name: projectName, deliverDate:date, estimatedHours: initialEstimatedHours, description:description, currentHours: new CurrentHours()}
  }

  function validateForm(){
    var isValid = (projectName != "" && initialEstimatedHours != "" && initialEstimatedHours > 0 && date != "")
    return isValid

  }

  if(submitted){
    return(
      <Navigate to="/main" replace={true} />
    )
  }
  
  return(
    <AddProjectStyle>
      <AddProjectTitleStyle>Criar Projeto</AddProjectTitleStyle>
      <AddProjectWrapper>
        <form onSubmit={handleSubmit}>
          <AddProjectContainerStyle>
            <TitleStyle>NOME DO PROJETO*</TitleStyle>
            <BasicInputStyle autoFocus type='text' onChange={(e) => setProjectName(e.target.value)} value={projectName} id='projectName' placeholder="Informe o nome do projeto"/>
          </AddProjectContainerStyle>

          <AddProjectContainerStyle>
            <TitleStyle>DATA DE ENTREGA</TitleStyle>
            <DateInput value={date} onChange={handleInput}/>
          </AddProjectContainerStyle>
          
          <AddProjectContainerStyle>
            <TitleStyle>ESTIMATIVA INICIAL DE HORAS</TitleStyle>
            <BasicInputStyle type='text' onChange={(e) => setInitialEstimatedHours(e.target.value)} value={initialEstimatedHours} id='initialEstimatedHours' placeholder="Estimativa de duração [horas]"/>
          </AddProjectContainerStyle>

          <AddProjectContainerStyle>
            <TitleStyle>ID PROJETO/CÓDIGO</TitleStyle>
            <BasicInputStyle type='text' onChange={(e) => setProjectId(e.target.value)} value={projectId} id='projectId' placeholder="Cod Projeto. Deixe vazio, se não existir"/>
          </AddProjectContainerStyle>

          <AddProjectContainerStyle>
            <TitleStyle>DESCRIÇÃO</TitleStyle>
            <BasicInputStyle type='text' onChange={(e) => setDescription(e.target.value)} value={description} id='description' placeholder="Descrição do projeto" />
          </AddProjectContainerStyle>
          
          <SaveButtonStyle type="submit">Save</SaveButtonStyle>
        </form>
      </AddProjectWrapper>
    </AddProjectStyle>)
}

export default AddProjectForm;