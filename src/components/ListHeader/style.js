import styled from "styled-components";


const ListHeaderStyle = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: normal;
  align-content: normal;
  text-decoration-line: none;
`;

const ListHeaderTitle = styled.p `
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  color: #F2EDEB;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

const ListHeaderAdd = styled.button `
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
  color: #F28A2E;
  background-color: transparent;
  border: 0;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
`;

export {ListHeaderAdd, ListHeaderTitle, ListHeaderStyle}