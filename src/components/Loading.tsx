import React, { memo } from 'react';
import styled from 'styled-components';

const Loading = memo(() => {
  return (
    <Background>
      <LoadingText>Loading . . .</LoadingText>
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

const LoadingText = styled.div`
  font: 2rem 'Noto Sans KR';
  text-align: center;
`;

export default Loading;
