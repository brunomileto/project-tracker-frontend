import styled from 'styled-components';
import { HomeButtonStyle, HomeButtonTextStyle } from '../style';

export const LoginButtonStyle = styled(HomeButtonStyle)`
  border-radius: 0px 6px 6px 0px;
`;
export const LoginButtonTextStyle = styled(HomeButtonTextStyle)`
  font-weight: 600;
  background: linear-gradient(90deg, #f2a71b 0%, #f22786 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
