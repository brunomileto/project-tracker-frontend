import axios from 'axios';
import {locStorage, requestMethods} from '../enumerators/enums.js'
import toast from 'react-hot-toast';

const BASEURL = process.env.REACT_APP_BASE_URL;
console.log(`Base URL: ${BASEURL}`)
const TIMEOUT = 30000;
const ENDPOINTS = {
  auth: "/authenticate",
  createUser:"/users/create",
  getUser:"/users/get",
  createProject: "/projects/create",
  getAllProjects: "/projects/getAll",
  getProject:"/projects/get",
  updateProject:"/projects/update",
  getAllTasks:"/tasks/getAll",
  getTask:"/tasks/get",
  createTask:"/tasks/create",
  updateTask:"/tasks/update"
}

class Api{
  #api;

  constructor(){
    this.#api = axios.create({
      baseURL: BASEURL,
      timeout: TIMEOUT
    })
  }

  #AuthConfig(email, password){
    return {
      method: requestMethods.post,
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.auth}`,
      headers:{
        'content-type': 'application/json'
      },
      data: {
        "email": email,
        "password": password
      }
    }
  }
  
  #GetUserConfig(email, token){
    return {
      method: requestMethods.get,
      params: {email: email},
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.getUser}`,
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
  }
  
  #CreateUserConfig(email, password){
    return {
      method: requestMethods.post,
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.createUser}`,
      headers:{
        'content-type': 'application/json'
      },
      data: {
        "name": 'Bruno teste',
        "email": email,
        "password": password
      }
    }
  }  
  
  #CreateTaskConfig(data, projectUid){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.post,      
      headers:{
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.createTask}/${projectUid}`,
      data: data
    }
  }

  #CreateProjectConfig(data){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.post,      
      headers:{
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.createProject}`,
      data: data
    }
  }

  #GetAllProjectsConfig(userUid){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.get,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.getAllProjects}`,
      data: {user: {uid: userUid}}
    }
  }

  #GetAllTasksConfig(projectUid){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.get,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.getAllTasks}/${projectUid}`,
    }
  }

  #GetProjectConfig(uid){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.get,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.getProject}/${uid}`,
    }

  }

  #GetTaskConfig(uid){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.get,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.getTask}/${uid}`,
    }
  }

  #UpdateProjectConfig(data){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.post,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.updateProject}`,
      data: data
    }
  }

  #UpdateTaskConfig(uid, data){
    const token = localStorage.getItem(locStorage.token);
    return{
      method: requestMethods.post,      
      headers:{
        Authorization: `Bearer ${token}`
      },
      url: `${this.#api.defaults.baseURL}${ENDPOINTS.updateTask}/${uid}`,
      data: data
    }
  }

  #CalculateAllProjectHours(allTasks){
    var totalCurrentHours = {hours:0, minutes:0, seconds:0}
    allTasks.forEach(task =>{
      totalCurrentHours.hours += parseInt(task.currentHours.hours);
      totalCurrentHours.minutes += parseInt(task.currentHours.minutes);
      totalCurrentHours.seconds += parseInt(task.currentHours.seconds);
    })
    return totalCurrentHours;
  }

  async #makeRequest(config){
    try {
      const response = await this.#api(config);
      return response.data;
    } catch (error) {
      return {success: false}
    }
  }

  async authenticate(userEmail, userPassword){
    try {
      const config = this.#AuthConfig(userEmail, userPassword)
      var response = await this.#makeRequest(config)
      if (response.success){
        localStorage.setItem(locStorage.email, userEmail)
        localStorage.setItem(locStorage.token, 
                             response.data.token)
      }
      return response.success;
    } catch (error) {
      toast.error(
        error.message
      )
      return {success: false}
    }
  }

  async getUser(){
    const email = localStorage.getItem(locStorage.email);
    const token = localStorage.getItem(locStorage.token);
    if (token != null && email != null){
      try {
        const config = this.#GetUserConfig(email, token)
        var response = await this.#makeRequest(config);
        return response;
      } catch (error) {
        toast(
          "Necessário realizar login novamente",
          {
            duration: 6000,
          }
        );
        return false;
      }
    }
    toast(
      "Não há credenciais salvas",
      {
        duration: 6000,
      }
    );
    return false;
  }

  async userIsSigned(){
    return await this.getUser()
  }

  async createUser(userEmail, userPassword){
    try {
      const config = this.#CreateUserConfig(userEmail, userPassword)
      var response = await this.#makeRequest(config);
      return response.success;
    } catch (error) {
      toast(
        error.message,
        {
          duration: 6000,
        }
      );
      return false;
    }
  }

  async createProject(data){
    try {
      const config = this.#CreateProjectConfig(data)
      var response = await this.#makeRequest(config);
      return response.success;
    } catch (error) {
      toast(
        error.message,
        {
          duration: 6000,
        }
      );
      return false;
    }
  }

  async createTask(data, projectUid){
    try {
      const config = this.#CreateTaskConfig(data, projectUid)
      var response = await this.#makeRequest(config);
      return response.success;
    } catch (error) {
      toast(
        error.message,
        {
          duration: 6000,
        }
      );
      return false;
    }
  }

  async getAllProjects(){
    const getUserResponse = await this.getUser();
    if (getUserResponse.success){
      const uid = getUserResponse.data.uid;
      try {
        const config = this.#GetAllProjectsConfig(uid)
        var response = await this.#makeRequest(config);
        return response;
      } catch (error) {
        return false;
      }
    } 
  }

  async getAllTasks(projectUid){
    try {
      const config = this.#GetAllTasksConfig(projectUid)
      var response = await this.#makeRequest(config);
      return response;
    } catch (error) {
      return false;
    }
  }

  async getProject(){
    try {
      var uid = localStorage.getItem(locStorage.projectId)
      if(typeof(uid) != 'undefined' && uid != "" && uid != null){
        const config = this.#GetProjectConfig(uid)
        var response = await this.#makeRequest(config);
        if(response.success)
          localStorage.setItem(locStorage.projectId, uid)
        return response;
      } else {success: false}
    } catch (error) {
      return false;
    }
  }

  async getTask(taskUid){
    try{
      const config = this.#GetTaskConfig(taskUid);
      var response = await this.#makeRequest(config);
      return response;
    } catch (error) {
      return {success: false};
    }
  }

  async updateProjectHour(){
    const getProjectResponse = await this.getProject();
    if (getProjectResponse.success){
      const getAllTasksResponse = await this.getAllTasks(getProjectResponse.data.uid);
      if (getAllTasksResponse.success){
        try {
          const projectData = getProjectResponse.data;
          const newTime = this.#CalculateAllProjectHours(getAllTasksResponse.data)
          projectData.currentHours.hours = newTime.hours;
          projectData.currentHours.minutes = newTime.minutes;
          projectData.currentHours.seconds = newTime.seconds;   
          const config = this.#UpdateProjectConfig(projectData)
          var response = await this.#makeRequest(config);
          return response;
        } catch (error) {
          return false;
        }
      }
    }
  }

  async updateTaskHour(newTime, taskUid){
    const getTaskResponse = await this.getTask(taskUid);
    try {
      var timeData = {}
      timeData.hours = newTime.split(":")[0]
      timeData.minutes = newTime.split(":")[1]
      timeData.seconds = newTime.split(":")[2]
      
      if (getTaskResponse.success){
        const taskData = getTaskResponse.data;
        taskData.currentHours.hours = newTime.split(":")[0]
        taskData.currentHours.minutes = newTime.split(":")[1]
        taskData.currentHours.seconds = newTime.split(":")[2]
      
        const config = this.#UpdateTaskConfig(taskUid, taskData)
        var response = await this.#makeRequest(config);
        return response;
      }
    } catch (error) {
      return false;
    }
  }
}

var api = new Api()
export default api;