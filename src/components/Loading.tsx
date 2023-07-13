import styled from 'styled-components';

const Loading = () => {
  return (
    <Background>
      <LoadingText>Loading . . .</LoadingText>
    </Background>
  );
};

const Background = styled.div`
  position: sticky;
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
