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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ScrollLockupContainer = styled.div.attrs((props) => ({
  style: {
    height: `${props.currentProgress}%`,
    width: `${props.currentProgress}%`,
  },
}))`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimationBlend = styled.div.attrs((props) => ({
  style: {
    transform: `translateY(${
      props.currentProgress >= props.blend.startAt
        ? props.currentProgress <= props.blend.endAt
          ? ((props.blend.startAt - props.currentProgress) /
              (props.blend.endAt - props.blend.startAt)) *
            100
          : -200
        : 0
    }%)`,
  },
}))`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimationImage = styled.canvas`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AnimationFocusBox = styled.div.attrs((props) => ({
  style: {
    width: `${15 * (1 - props.currentProgress)}%`,
  },
}))`
  background-color: black;
  position: absolute;
  top: 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: 15%;
  height: 100%;
`;

const AnimationText = styled.p`
  line-height: normal;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: NanumGothic;
  color: ${(props) => props.color};
  text-shadow: 0.25rem 0.25rem 0.25rem black;

  @media (min-width: 1024px) {
    font-size: 5vw;
  }
`;

const AnimationBackgroundImageBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AnimationBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerText = styled.p`
  width: 100%;
  height: calc(100vh - 3.25rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: NanumGothic;
  color: white;
  text-align: center;
  line-height: 1.5em;

  @media (min-width: 1024px) {
    font-size: 7vw;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 3.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentBanner = styled.p`
  width: 80%;
  color: white;
  line-height: 1em;
  font-size: 4rem;
  font-weight: 800;
  font-family: NanumGothic;
  line-height: 2em;
  @media (min-width: 1024px) {
    width: 50%;
    font-size: 5vw;
  }
`;

const ContentText = styled.p`
  width: 80%;
  color: white;
  line-height: 1em;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: NanumGothic;
  line-height: 1.25em;
  @media (min-width: 1024px) {
    width: 50%;
    font-size: 1.5vw;
  }
`;

const Home = () => {
  const ScrollContainerHeight = 20;
  const [videoCurrentProgress, setVideoCurrentProgress] = useState(0);
  const [videoShowingProgress, setVideoShowingProgress] = useState(0);
  const [openVideo, setOpenVideo] = useState([]);
  const stickyContentRef = useRef(null);
  const openVideoRef = useRef(null);

  useEffect(() => {
    const acc = 0.2;

    let rafId;
    let scrolled = false;
    let delayedTopOffset = stickyContentRef.current.offsetTop;
    let delayedYOffset = stickyContentRef.current.getBoundingClientRect().y;

    const loop = () => {
      delayedTopOffset =
        delayedTopOffset +
        (stickyContentRef.current.offsetTop - delayedTopOffset) * acc;
      setVideoCurrentProgress(
        delayedTopOffset / (window.innerHeight * ScrollContainerHeight)
      );

      delayedYOffset =
        delayedYOffset +
        (stickyContentRef.current.getBoundingClientRect().y - delayedYOffset) *
          acc;
      const animationYStart = Math.round(window.innerHeight * 0.8);

      setVideoShowingProgress(
        delayedYOffset <= animationYStart
          ? delayedYOffset >= 0
            ? 1 - delayedYOffset / animationYStart
            : 1
          : 0
      );

      rafId = requestAnimationFrame(loop);

      if (Math.abs(stickyContentRef.current.offsetTop - delayedTopOffset) < 1) {
        cancelAnimationFrame(rafId);
        scrolled = false;
      }
    };

    const onScrollEvent = () => {
      if (!scrolled) {
        rafId = requestAnimationFrame(loop);
        scrolled = true;
      }
    };

    const loadOpenImages = () => {
      const images = [];

      const currentProgress =
        stickyContentRef.current.offsetTop /
        Math.round(window.innerHeight * ScrollContainerHeight);

      const inputImage =
        Math.round(385 * (currentProgress * 2 > 1 ? 1 : currentProgress * 2)) +
        1;

      for (let i = 1; i <= 386; i++) {
        const image = new Image();
        image.src = require(`../lib/assets/videos/openVideo/${i}.jpg`);

        if (i === inputImage)
          image.onload = () => {
            const openImageContext = openVideoRef.current.getContext('2d');

            openImageContext.drawImage(image, 0, 0);

            const imageData = openImageContext.getImageData(0, 0, 1920, 1080);

            for (let i = 0; i < imageData.data.length; i += 4) {
              const r = imageData.data[i];
              const g = imageData.data[i + 1];
              const b = imageData.data[i + 2];

              if (g > r + b) {
                imageData.data[i + 3] = 0;
              }
            }

            openImageContext.putImageData(imageData, 0, 0);
          };
        images.push(image);
      }
      setOpenVideo(images);
    };

    loadOpenImages();

    window.addEventListener('scroll', onScrollEvent);

    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    };
  }, []);

  const getOpenImage = () => {
    if (openVideoRef.current) {
      const openImageContext = openVideoRef.current.getContext('2d', {
        willReadFrequently: true,
      });
      openImageContext.drawImage(
        openVideo[
          Math.round(
            385 * (videoCurrentProgress * 2 > 1 ? 1 : videoCurrentProgress * 2)
          )
        ],
        0,
        0
      );

      const imageData = openImageContext.getImageData(0, 0, 1920, 1080);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];

        if (g > r + b) {
          imageData.data[i + 3] = 0;
        }
      }

      openImageContext.putImageData(imageData, 0, 0);
    }
  };

  return (
    <Container>
      <Section>
        <BannerText>
          모여서 각자
          <br />
          소프트웨어하자!
        </BannerText>
        <ScrollContainer height={ScrollContainerHeight * 100}>
          <ScrollStickyContainer
            currentProgress={
              videoCurrentProgress >= 0.8
                ? 5 * (1 - videoCurrentProgress)
                : videoShowingProgress
            }
          >
            <ScrollStickyContent ref={stickyContentRef}>
              <ScrollLockupContainer
                currentProgress={
                  videoCurrentProgress >= 0.8
                    ? 50 * (6 - 5 * videoCurrentProgress)
                    : 100
                }
              >
                <AnimationBackgroundImageBox>
                  <AnimationBackgroundImage
                    src={require('../lib/assets/images/student.jpg')}
                    alt="BackGroundImage"
                  />
                </AnimationBackgroundImageBox>
                <AnimationBlend
                  currentProgress={videoCurrentProgress}
                  blend={{ startAt: 0.5, endAt: 0.6 }}
                >
                  <AnimationBackgroundImage
                    src={require('../lib/assets/images/art.jpg')}
                    alt="BackGroundImage"
                  />
                  <AnimationImage
                    ref={openVideoRef}
                    width="1920"
                    height="1080"
                  ></AnimationImage>
                  {openVideoRef.current && getOpenImage()}
                </AnimationBlend>
                <AnimationFocusBox
                  left="0"
                  currentProgress={videoShowingProgress}
                />
                <AnimationFocusBox
                  right="0"
                  currentProgress={videoShowingProgress}
                />
                <AnimationBox
                  fadeIn={{ startAt: 0.0, endAt: 0.05 }}
                  fadeOut={{ startAt: 0.1, endAt: 0.125 }}
                  currentProgress={videoCurrentProgress}
                >
                  <AnimationText color="white">
                    SW중심대학사업
                    <br />
                    새로운 프로젝트
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.125, endAt: 0.175 }}
                  fadeOut={{ startAt: 0.225, endAt: 0.25 }}
                  currentProgress={videoCurrentProgress}
                >
                  <AnimationText color="white">
                    스스로 학습하며
                    <br />
                    성장하는 모험 '모각소'
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.25, endAt: 0.3 }}
                  fadeOut={{ startAt: 0.35, endAt: 0.375 }}
                  currentProgress={videoCurrentProgress}
                >
                  <AnimationText color="white">
                    열정으로 가득찬 이곳
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.375, endAt: 0.425 }}
                  fadeOut={{ startAt: 0.475, endAt: 0.5 }}
                  currentProgress={videoCurrentProgress}
                >
                  <AnimationText color="white">
                    아주대학교에서
                    <br />
                    절찬리 진행중
                  </AnimationText>
                </AnimationBox>
                <AnimationBox
                  fadeIn={{ startAt: 0.55, endAt: 0.6 }}
                  fadeOut={{ startAt: 0.65, endAt: 0.7 }}
                  currentProgress={videoCurrentProgress}
                >
                  <AnimationText color="white">
                    지금 바로 신청하세요!
                  </AnimationText>
                </AnimationBox>
              </ScrollLockupContainer>
            </ScrollStickyContent>
          </ScrollStickyContainer>
        </ScrollContainer>
      </Section>
      <Section>
        <ContentDiv>
          <ContentBanner>모각소란</ContentBanner>
          <ContentText color="white">
            아주대학교 SW중심대학사업의 일환으로, SW전공 및 융합생의
            자기주도적학습 역량을 강화하고 프로그래밍 문화를 형성하기 위한
            프로그램입니다.
            <br />
            아주대학교 소프트웨어융합대학과 SW중심대학사업은 우리 학생들이
            스스로 동기부여하며 주체적인 SW, AI 융합 인재로 성장할 수 있도록
            적극적으로 지원합니다.
          </ContentText>
        </ContentDiv>
      </Section>
    </Container>
  );
};

export default Home;
