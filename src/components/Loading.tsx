import styled from 'styled-components';
import spinner from '../assets/img/spinner.gif';

const Loading = () => {
  return (
    <Background>
      <img src={spinner} />
    </Background>
  );
};

const Background = styled.div`
  position: sticky;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Loading;
