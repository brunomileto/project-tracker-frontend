import styled from "styled-components";

const CronContainerStyle = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 35vh;
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

const CronItemButtonStyle = styled.button `
  background-color: transparent;
  border-color: transparent;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: rgba(253, 255, 254, 0.2);
`;

const CronItemContainerStyle = styled.div `
  width: 100%;
  height: 60px;
  background: transparent;
  box-shadow: 2px 5px 50px #0F1726;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-color: transparent;
  padding: 10px;
  margin-top: 6px;
`;

const CronItemLeftContainerStyle = styled.div `
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
`;

const CronItemLeftStyle = styled.p `
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
  margin-top: 5px
`;

const CronItemLeftValueStyle = styled(CronItemLeftStyle) `
  background: linear-gradient(90deg, #F2A71B 0%, #F22786 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const CronItemLeftSTitletyle = styled(CronItemLeftStyle) `
  color: rgba(253, 255, 254, 0.2);
`;

const CronItemRightStyle = styled.button `
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

const ImageStyle = styled.img`
`;

export {CronItemButtonStyle, ImageStyle, CronItemStyle, CronContainerStyle, CronItemLeftSTitletyle, CronItemLeftValueStyle, CronItemLeftContainerStyle, CronItemContainerStyle, CronItemLeftStyle, CronItemRightStyle
}