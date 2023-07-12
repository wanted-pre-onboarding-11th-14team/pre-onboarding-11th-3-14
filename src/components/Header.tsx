import React, { memo } from 'react';
import styled from 'styled-components';
import { useIssueState } from '../api/IssueContext';

const Header = memo(() => {
  const state = useIssueState();
  const data = (state.issueList.data && state.issueList.data[0]) || state.issue.data;

  return (
    <div>
      <HeaderContainer>
        {data && data.repository_url.split('/').reverse()[1] + ' / '}
        {data && data.repository_url.split('/').reverse()[0]}
      </HeaderContainer>
    </div>
  );
});

const HeaderContainer = styled.div`
  height: 50px;
  font-size: 30px;
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
`;

export default Header;
