import styled from 'styled-components';

export const HomeContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  max-width: 1140px;
`;

export const HomeButtonStyle = styled.div`
  margin-top: 6vw;
  margin-bottom: 0;
  max-width: 43.75vw;
  height: 45px;
  padding-top: 10px;
  display: inline-block;
  background-color: #1d2638;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
`;

export const HomeButtonTextStyle = styled.p`
  text-align: center;
  vertical-align: middle;
  line-height: 45px;
  font-weight: bold;
  /* color: #1d2638; */
  width: 100px;
  margin: 0 auto;
  font-style: normal;
  font-size: 1.3em;
  line-height: 100%;
  height: 100%;
`;
