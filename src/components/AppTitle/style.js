/* import styled from 'styled-components';

export const AppTitle = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #f2edeb;
  margin: 0 auto;
`;
 */
import styled from 'styled-components';

const AppTitleStyle = styled.h1`
  font-size: 30px;
  line-height: 38px;
  font-weight: bold;
  color: #f2edeb;
  margin: 0 auto;
  text-align: center;
`;

const AppTitleStyleHome = styled(AppTitleStyle)`
  margin-top: 10vw;
`;

export { AppTitleStyle, AppTitleStyleHome };
