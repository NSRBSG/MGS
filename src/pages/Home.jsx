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
    opacity:
      props.currentPercent > 0 && props.currentPercent < 1
        ? props.currentPercent <= 0.2
          ? props.currentPercent * 5
          : props.currentPercent >= 0.8
          ? 1 - (props.currentPercent - 0.8) * 5
          : 1
        : 0,
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
  color: black;

  @media (min-width: 1024px) {
    font-size: 7vw;
  }
`;

const Home = () => {
  const ScrollContainerHeight = [5];
  const [inkVideoCurrentProgress, setInkVideoCurrentProgress] = useState(0);
  const [inkVideo, setInkVideo] = useState([]);
  const inkVideoRef = useRef(null);

  //getBoundingClientRect()

  inkVideoRef.current
    ?.getContext('2d')
    .drawImage(inkVideo[Math.round(301 * inkVideoCurrentProgress)], 0, 0);

  useEffect(() => {
    const onScrollEvent = () => {
      setInkVideoCurrentProgress(
        inkVideoRef.current.offsetTop /
          Math.round(window.innerHeight * (ScrollContainerHeight[0] - 1))
      );
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
          currentPercent={inkVideoCurrentProgress}
        >
          <AnimationImage ref={inkVideoRef} width="3840" height="2160">
            현재 웹 브라우저를 지원하지 않습니다.
          </AnimationImage>
          <AnimationText
            fadeIn={{ startAt: 0.2, endAt: 0.3 }}
            fadeOut={{ startAt: 0.35, endAt: 0.4 }}
            currentPercent={inkVideoCurrentProgress}
          >
            모각소
          </AnimationText>
          <AnimationText
            fadeIn={{ startAt: 0.4, endAt: 0.5 }}
            fadeOut={{ startAt: 0.55, endAt: 0.6 }}
            currentPercent={inkVideoCurrentProgress}
          >
            화이팅!
          </AnimationText>
          <AnimationText
            fadeIn={{ startAt: 0.6, endAt: 0.7 }}
            fadeOut={{ startAt: 0.75, endAt: 0.8 }}
            currentPercent={inkVideoCurrentProgress}
          >
            끼얏호!
          </AnimationText>
        </ScrollContainer>
      </Section>
    </Container>
  );
};

export default Home;
