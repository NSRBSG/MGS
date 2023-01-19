import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
`;

const AnimationText = styled.span.attrs((props) => ({
  style: {
    transform: `translateY(${
      props.currentPercent >= props.fadeIn.startAt &&
      props.currentPercent <= props.fadeOut.endAt
        ? props.currentPercent >= props.fadeIn.startAt &&
          props.currentPercent <= props.fadeIn.endAt
          ? (1 -
              (props.currentPercent - props.fadeIn.startAt) /
                (props.fadeIn.endAt - props.fadeIn.startAt)) *
            20
          : props.currentPercent >= props.fadeOut.startAt &&
            props.currentPercent <= props.fadeOut.endAt
          ? (-(props.currentPercent - props.fadeOut.startAt) /
              (props.fadeOut.endAt - props.fadeOut.startAt)) *
            20
          : 0
        : -20
    }%)`,
    opacity:
      props.currentPercent >= props.fadeIn.startAt &&
      props.currentPercent <= props.fadeOut.endAt
        ? props.currentPercent >= props.fadeIn.startAt &&
          props.currentPercent <= props.fadeIn.endAt
          ? (props.currentPercent - props.fadeIn.startAt) /
            (props.fadeIn.endAt - props.fadeIn.startAt)
          : props.currentPercent >= props.fadeOut.startAt &&
            props.currentPercent <= props.fadeOut.endAt
          ? 1 -
            (props.currentPercent - props.fadeOut.startAt) /
              (props.fadeOut.endAt - props.fadeOut.startAt)
          : 1
        : 0,
  },
}))`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: NanumGothic;
  color: white;
  @media (min-width: 1024px) {
    top: calc(50% - 3.25rem);
    font-size: 7vw;
  }
`;

const AnimationImage = styled.canvas`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const ScrollContainer = styled.div.attrs((props) => ({
  style: {
    opacity: props.currentPercent,
  },
}))`
  position: relative;
  height: ${(props) => props.height}vh;
`;

const Banner = styled.h1`
  width: 100%;
  height: calc(100vh - 3.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: NanumGothicCoding;
  color: white;

  @media (min-width: 1024px) {
    font-size: 7vw;
  }
`;

const Home = () => {
  const ScrollContainerHeight = [5];
  const [inkVideoCurrentProgress, setInkVideoCurrentProgress] = useState(0);
  const [inkVideoShowingProgress, setInkVideoShowingProgress] = useState(0);
  const [inkVideo, setInkVideo] = useState([]);
  const inkVideoRef = useRef(null);

  inkVideoRef.current
    ?.getContext('2d')
    .drawImage(inkVideo[Math.round(301 * inkVideoCurrentProgress)], 0, 0);

  useEffect(() => {
    const onScrollEvent = () => {
      setInkVideoCurrentProgress(
        inkVideoRef.current.offsetTop /
          Math.round(window.innerHeight * (ScrollContainerHeight[0] - 1))
      );

      const y =
        inkVideoRef.current.getBoundingClientRect().y >= 0
          ? inkVideoRef.current.getBoundingClientRect().y
          : -inkVideoRef.current.getBoundingClientRect().y;
      const offset = window.innerHeight / 1.5;
      if (y <= offset) setInkVideoShowingProgress(1 - y / offset);
    };

    const loadImages = () => {
      const images = [];
      const progress =
        Math.round(
          (301 * inkVideoRef.current.offsetTop) /
            Math.round(window.innerHeight * (ScrollContainerHeight[0] - 1))
        ) + 1;

      for (let i = 1; i <= 302; i++) {
        const image = new Image();
        image.src = require(`../lib/assets/videos/inkVideo/${i}.jpg`);
        if (i === progress)
          image.onload = () => {
            inkVideoRef.current?.getContext('2d').drawImage(image, 0, 0);
          };
        images.push(image);
      }
      setInkVideo(images);
    };

    loadImages();

    window.addEventListener('scroll', onScrollEvent);

    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  return (
    <Container>
      <Section>
        <Banner>NSRBSG</Banner>
        <ScrollContainer
          height={ScrollContainerHeight[0] * 100}
          currentPercent={inkVideoShowingProgress}
        >
          <AnimationImage ref={inkVideoRef} width="3840" height="2160">
            현재 웹 브라우저를 지원하지 않습니다.
          </AnimationImage>
          <AnimationText
            fadeIn={{ startAt: 0.0, endAt: 0.1 }}
            fadeOut={{ startAt: 0.15, endAt: 0.2 }}
            currentPercent={inkVideoCurrentProgress}
          >
            완전히 새로워진 모각소
          </AnimationText>
          <AnimationText
            fadeIn={{ startAt: 0.2, endAt: 0.3 }}
            fadeOut={{ startAt: 0.35, endAt: 0.4 }}
            currentPercent={inkVideoCurrentProgress}
          >
            그 누구도 생각지 못한
            <br />
            아름다움
          </AnimationText>
          <AnimationText
            fadeIn={{ startAt: 0.4, endAt: 0.5 }}
            fadeOut={{ startAt: 0.55, endAt: 0.6 }}
            currentPercent={inkVideoCurrentProgress}
          >
            열정으로 가득찬 이곳
          </AnimationText>
          <AnimationText
            fadeIn={{ startAt: 0.6, endAt: 0.7 }}
            fadeOut={{ startAt: 0.75, endAt: 0.8 }}
            currentPercent={inkVideoCurrentProgress}
          >
            아주대학교에서
            <br />
            절찬리 진행중
          </AnimationText>
        </ScrollContainer>
      </Section>
      <Section>
        <Banner>다음은 뭐하지</Banner>
      </Section>
    </Container>
  );
};

export default Home;
