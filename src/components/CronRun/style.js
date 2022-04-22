import styled from 'styled-components';


const CronContainerStyle = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 40vh;
  width: vw;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CronItemStyle = styled.h3 `
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: -0.04em;
  color: #F2A71B;
`;
export {CronContainerStyle, CronItemStyle};
