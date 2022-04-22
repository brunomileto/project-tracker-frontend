import styled from "styled-components";

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

export {SignFormStyle, SignFormInputs, SignFormInput, SignFormSubmit};