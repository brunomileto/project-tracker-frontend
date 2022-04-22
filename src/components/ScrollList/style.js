import styled from "styled-components";

const ScrollListStyle = styled.div `
  margin-top: 8px;
  height: 60vh;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollListItemContainerStyle = styled.button `
  width: 100%;
  height: 50px;
  background: linear-gradient(90deg, #1D2638 29.29%, #0F1726 164.64%);
  box-shadow: 2px 5px 50px #0F1726;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: normal;
  border-color: transparent;
  padding: 10px;
  margin-top: 6px;
`;

const ScrollListItemLeftStyle = styled.p `
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  color: #F2EDEB;
  background-color: transparent;
  border: 0;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
`;

const ScrollListItemRightStyle = styled.p `
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  letter-spacing: -0.04em;
  background: -webkit-linear-gradient(360deg, #F2A71B 0%, #F22786 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  border: 0;
  font-size: 16px;
  font-weight: 600;
`;

export {ScrollListStyle, ScrollListItemContainerStyle, ScrollListItemLeftStyle, ScrollListItemRightStyle
}