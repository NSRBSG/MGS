import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({
  style: {
    transform: `translate3d(${props.x}px, ${props.y}px, 0px)`,
  },
}))`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10%;
  height: 10%;
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
    50% {
      stroke-dashoffset: 0;
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
  const [targetXY, setTargetXY] = useState([0, 0]);

  const twoMatrixSubstitution = (a, b) => {
    return [a[0] - b[0], a[1] - b[1]];
  };

  const twoMatrixAddition = (a, b) => {
    return [a[0] + b[0], a[1] + b[1]];
  };

  const oneMatrixMultiplication = (a, index) => {
    return [a[0] * index, a[1] * index];
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setTargetXY((prev) =>
        twoMatrixAddition(
          prev,
          oneMatrixMultiplication(
            twoMatrixSubstitution(
              [
                e.pageX - window.innerWidth * 0.5,
                e.pageY - window.innerHeight * 0.5,
              ],
              prev
            ),
            0.05
          )
        )
      );
    });
    window.addEventListener('wheel', (e) => {
      setTargetXY((prev) =>
        twoMatrixAddition(
          prev,
          oneMatrixMultiplication(
            twoMatrixSubstitution(
              [
                e.pageX - window.innerWidth * 0.5,
                e.pageY - window.innerHeight * 0.5 + e.deltaY,
              ],
              prev
            ),
            0.1
          )
        )
      );
    });
  }, []);

  return (
    <Container x={targetXY[0]} y={targetXY[1]}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 327 291.84"
      >
        <defs>
          <radialGradient id="gradient">
            <stop offset="0%" stopColor="black" />
            <stop offset="50%" stopColor="black" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <Rotation3D animation="rotationOne">
          <ellipse
            cx="163.5"
            cy="145.92"
            rx="156"
            ry="60"
            fill="transparent"
            stroke="black"
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
            stroke="black"
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
            stroke="black"
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
        <circle fill="url(#gradient)" cx="163.5" cy="145.92" r="31" />
      </svg>
    </Container>
  );
};

export default CuteMouse;
