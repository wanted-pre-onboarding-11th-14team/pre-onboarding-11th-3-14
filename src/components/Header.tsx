import styled from 'styled-components';
import { useIssueState } from '../api/IssueContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const state = useIssueState();
  const data = (state.issueList.data && state.issueList.data[0]) || state.issue.data;

  return (
    <div>
      <HeaderContainer>
        <NavLink to='/'>
          {data && data.repository_url.split('/').reverse()[1] + ' / '}
          {data && data.repository_url.split('/').reverse()[0]}
        </NavLink>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled.div`
  height: 50px;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;

  a {
    text-decoration: none;
    color: rgb(34, 135, 246);
  }
`;

export default Header;
