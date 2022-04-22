import styled from "styled-components";

const AddTaskTitleStyle = styled.h2`
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #F2EDEB;
margin-top: 5px;
`;

const TitleStyle = styled.h3`
font-weight: 700;
font-size: 11px;
line-height: 14px;
letter-spacing: 0.11em;
color: #F2EDEB;
`;

const BasicInputStyle = styled.input`
width: 100%;
height: 35px;
background: #232D3D;
border-radius: 2px;
border-color: transparent;
padding-left: 5px;
color: #FDFFFE
`;

const AddTaskStyle = styled.div`
`;

const AddTaskContainerStyle = styled.div`
  margin-top: 25px;
  width: 295px;
`;

const AddTaskWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const SignFormStyle = styled.div``;

const SignFormInputs = styled.div`
  margin-top: 5vh;
`;

const SignFormInput = styled.input`
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding: 10px;
  width: 10vw;
  max-width: 340px;
  min-width: 280px;
  height: 40px;
  background: #1D2638;
  border: 2px solid #444B59;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: white;
`;

const SignFormSubmit = styled.button`
  position: fixed;
  bottom: 10vh;
  left:0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  height: 35px;
  box-shadow: 2px 5px 50px #0F1726;
  border-radius: 6px;
  background: linear-gradient(90deg, #F2A71B 0%, #F22786 100%);
  font-size: 15px;
  font-weight: bold;
`;
const SaveButtonStyle = styled.button`
  position: fixed;
  bottom: 5vh;
  left: 80vw;
  margin-left: auto;
  margin-right: auto;
  color: #F28A2E;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.04em;
  background: transparent;
  border-color: transparent;
`;
export {AddTaskWrapper, AddTaskTitleStyle, SaveButtonStyle, TitleStyle, BasicInputStyle, AddTaskStyle, AddTaskContainerStyle};