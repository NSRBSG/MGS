import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const CuteEllipse = styled.ellipse`
  fill: transparent;
  stroke: black;
  stroke-width: 11;
  stroke-linecap: round;
  stroke-dasharray: 713;
  stroke-dashoffset: -713;
  animation: rotation 1s infinite;
  animation-delay: ${(props) => props.animationDelay};

  @keyframes rotation {
    0% {
      stroke-dashoffset: -713;
    }
    100% {
      stroke-dashoffset: 713;
    }
  }
`;

const Rotation3D = styled.g`
  animation: ${(props) => props.animation} 5s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotationOne {
    100% {
      transform: rotate3d(0, 1, 0, 360deg);
    }
  }
  @keyframes rotationTwo {
    100% {
      transform: rotate3d(2, 1.22, 0, 360deg);
    }
  }
  @keyframes rotationThree {
    100% {
      transform: rotate3d(-2, 1.22, 0, 360deg);
    }
  }
`;

const CuteMouse = () => {
  return (
    <Container>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 327 291.84"
        width="100%"
        height="100%"
      >
        <defs>
          <radialGradient id="gradient">
            <stop offset="0%" stopColor="black" />
            <stop offset="50%" stopCOlor="gray" />
            <stop offset="100%" stopColor='"#00aaff"' />
          </radialGradient>
        </defs>
        <Rotation3D animation="rotationOne">
          <ellipse
            cx="163.5"
            cy="145.92"
            rx="156"
            ry="60"
            fill="transparent"
            stroke="#00aaff"
            strokeWidth={16}
            opacity="50%"
          />
          <CuteEllipse
            cx="163.5"
            cy="145.92"
            rx="156"
            ry="60"
            animationDelay="0.2s"
          />
        </Rotation3D>
        <Rotation3D animation="rotationTwo">
          <ellipse
            cx="384"
            cy="384"
            rx="156"
            ry="60"
            transform="matrix(.5 -.87 .87 .5 -361.05 286.47)"
            fill="transparent"
            stroke="#00aaff"
            strokeWidth={16}
            opacity="50%"
          />
          <CuteEllipse
            cx="384"
            cy="384"
            rx="156"
            ry="60"
            transform="matrix(.5 -.87 .87 .5 -361.05 286.47)"
            animationDelay="0.4s"
          />
        </Rotation3D>
        <Rotation3D animation="rotationThree">
          <ellipse
            cx="384"
            cy="384"
            rx="60"
            ry="156"
            transform="rotate(-30 -170.504 676.413)"
            fill="transparent"
            stroke="#00aaff"
            strokeWidth={16}
            opacity="50%"
          />
          <CuteEllipse
            cx="384"
            cy="384"
            rx="60"
            ry="156"
            transform="rotate(-30 -170.504 676.413)"
            animationDelay="0.6s"
          />
        </Rotation3D>
        <circle cx="163.5" cy="145.92" r="31" fill="url(#gradient)" />
      </svg>
    </Container>
  );
};

export default CuteMouse;
