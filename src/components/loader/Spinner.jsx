import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Circle = styled.circle`
  fill: transparent;
  stroke: black;
  stroke-width: 4;
  stroke-dasharray: 157;

  animation: loading 1s infinite;
  @keyframes loading {
    0% {
      stroke-dashoffset: 157;
    }
    75% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: -157;
    }
  }
`;

const Spinner = () => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <Circle cx="50%" cy="50%" r="25"></Circle>
      </svg>
    </Container>
  );
};

export default Spinner;
