import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
`;

const ScrollContainer = styled.div`
  position: relative;
  top: 0;
  height: ${(props) => props.height}vh;
`;

const ScrollStickyContainer = styled.div.attrs((props) => ({
  style: {
    opacity: props.currentProgress,
  },
}))`
  position: relative;
  top: 0;
  height: calc(100% + 100vh);
`;

const ScrollStickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;

const ScrollLockupContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const AnimationBox = styled.div.attrs((props) => ({
  style: {
    transform: `translateY(${
      props.currentProgress >= props.fadeIn.startAt
        ? props.currentProgress <= props.fadeIn.endAt
          ? (1 -
              (props.currentProgress - props.fadeIn.startAt) /
                (props.fadeIn.endAt - props.fadeIn.startAt)) *
            10
          : props.currentProgress >= props.fadeOut.startAt
          ? props.currentProgress <= props.fadeOut.endAt
            ? (-(props.currentProgress - props.fadeOut.startAt) /
                (props.fadeOut.endAt - props.fadeOut.startAt)) *
              10
            : -10
          : 0
        : 10
    }%)`,
    opacity:
      props.currentProgress >= props.fadeIn.startAt
        ? props.currentProgress <= props.fadeIn.endAt
          ? (props.currentProgress - props.fadeIn.startAt) /
            (props.fadeIn.endAt - props.fadeIn.startAt)
          : props.currentProgress >= props.fadeOut.startAt
          ? props.currentProgress <= props.fadeOut.endAt
            ? 1 -
              (props.currentProgress - props.fadeOut.startAt) /
                (props.fadeOut.endAt - props.fadeOut.startAt)
            : 0
          : 1
        : 0,
  },
}))`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const AnimationImage = styled.canvas`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const AnimationText = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: NanumGothic;
  color: white;

  @media (min-width: 1024px) {
    font-size: 7vw;
  }
`;

const BannerText = styled.p`
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
  const stickyContentRef = useRef(null);
  const inkVideoRef = useRef(null);

  inkVideoRef.current
    ?.getContext('2d')
    .drawImage(
      inkVideo[
        Math.round(
          301 *
            (inkVideoCurrentProgress * 1.25 > 1
              ? 1
              : inkVideoCurrentProgress * 1.25)
        )
      ],
      0,
      0
    );

  useEffect(() => {
    const onScrollEvent = () => {
      setInkVideoCurrentProgress(
        stickyContentRef.current.offsetTop /
          (window.innerHeight * ScrollContainerHeight[0])
      );

      const { y } = inkVideoRef.current.getBoundingClientRect();
      const offset = Math.round(window.innerHeight * 0.8);

      if (y >= 0 && y <= offset) {
        setInkVideoShowingProgress(1 - y / offset);
      } else {
        setInkVideoShowingProgress(0);
      }
    };

    const loadInkImages = () => {
      const images = [];

      const currentProgress =
        stickyContentRef.current.offsetTop /
        Math.round(window.innerHeight * ScrollContainerHeight[0]);

      const inputImage =
        Math.round(
          301 * (currentProgress * 1.25 > 1 ? 1 : currentProgress * 1.25)
        ) + 1;

      for (let i = 1; i <= 302; i++) {
        const image = new Image();
        image.src = require(`../lib/assets/videos/inkVideo/${i}.jpg`);
        if (i === inputImage)
          image.onload = () => {
            inkVideoRef.current?.getContext('2d').drawImage(image, 0, 0);
          };
        images.push(image);
      }
      setInkVideo(images);
    };

    loadInkImages();

    window.addEventListener('scroll', onScrollEvent);

    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  return (
    <Container>
      <Section>
        <BannerText>NSRBSG</BannerText>
        <ScrollContainer height={ScrollContainerHeight[0] * 100}>
          <ScrollStickyContainer
            currentProgress={
              inkVideoCurrentProgress >= 0.8
                ? -5 * (inkVideoCurrentProgress - 1)
                : inkVideoShowingProgress
            }
          >
            <ScrollStickyContent ref={stickyContentRef}>
              <ScrollLockupContainer>
                <AnimationImage ref={inkVideoRef} width="1920" height="1080">
                  현재 웹 브라우저를 지원하지 않습니다.
                </AnimationImage>
                <AnimationBox
                  fadeIn={{ startAt: 0.0, endAt: 0.1 }}
                  fadeOut={{ startAt: 0.15, endAt: 0.2 }}
                  currentProgress={inkVideoCurrentProgress}
                >
                  <AnimationText>
                    완전히 새로워진
                    <br />
                    모각소
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.2, endAt: 0.3 }}
                  fadeOut={{ startAt: 0.35, endAt: 0.4 }}
                  currentProgress={inkVideoCurrentProgress}
                >
                  <AnimationText>
                    그 누구도 생각지 못한
                    <br />
                    아름다움
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.4, endAt: 0.5 }}
                  fadeOut={{ startAt: 0.55, endAt: 0.6 }}
                  currentProgress={inkVideoCurrentProgress}
                >
                  <AnimationText>열정으로 가득찬 이곳</AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.6, endAt: 0.7 }}
                  fadeOut={{ startAt: 0.75, endAt: 0.8 }}
                  currentProgress={inkVideoCurrentProgress}
                >
                  <AnimationText>
                    아주대학교에서
                    <br />
                    절찬리 진행중
                  </AnimationText>
                </AnimationBox>
              </ScrollLockupContainer>
            </ScrollStickyContent>
          </ScrollStickyContainer>
        </ScrollContainer>
      </Section>
      <Section>
        <BannerText>다음은 뭐하지</BannerText>
      </Section>
    </Container>
  );
};

export default Home;
