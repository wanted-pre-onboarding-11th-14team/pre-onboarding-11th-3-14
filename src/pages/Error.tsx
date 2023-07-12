import React, { memo } from 'react';
import styled from 'styled-components';

const Error = memo(() => {
  return (
    <Background>
      <ErrorText>
        😢
        <br />
        Not Found
      </ErrorText>
    </Background>
  );
});

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  font: 2rem 'Noto Sans KR';
  text-align: center;
`;

export default Error;
