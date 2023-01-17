import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  height: ${(props) => props.height}px;
  visibility: ${(props) =>
    props.section === props.currentSection ? 'visible' : 'hidden'};
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
            100
          : props.currentPercent >= props.fadeOut.startAt &&
            props.currentPercent <= props.fadeOut.endAt
          ? (-(props.currentPercent - props.fadeOut.startAt) /
              (props.fadeOut.endAt - props.fadeOut.startAt)) *
            100
          : 0
        : -100
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
  font-weight: bolder;
  font-family: NanumGothic;
  color: white;
  @media (min-width: 1024px) {
    top: calc(50% - 5rem);
    font-size: 7vw;
  }
`;

const AnimationImage = styled.canvas`
  position: fixed;
  width: 100%;
  height: calc(100vh - 5rem);
  object-fit: cover;
`;

const Home = () => {
  const [sectionHeight, setSectionHeight] = useState(window.innerHeight * 5);
  const [currentSection, setCurrentSection] = useState(
    Math.floor(window.scrollY / sectionHeight)
  );
  const [currentPercent, setCurrentPercent] = useState(
    (window.scrollY % sectionHeight) / sectionHeight
  );
  const [inkVideo, setInkVideo] = useState([]);

  const canvasRef = useRef(null);

  canvasRef.current
    ?.getContext('2d')
    .drawImage(inkVideo[Math.round(301 * currentPercent)], 0, 0);

  useEffect(() => {
    const resizeSectionHeight = () => {
      setSectionHeight(window.innerHeight * 5);
    };

    const changeCurrentSection = () => {
      const currentSectionHeight = window.innerHeight * 5;

      setCurrentSection(Math.floor(window.scrollY / currentSectionHeight));
      setCurrentPercent(
        (window.scrollY % currentSectionHeight) / currentSectionHeight
      );
    };

    const loadImages = () => {
      const images = [];
      const progress =
        Math.round(
          (301 * (window.scrollY % (window.innerHeight * 5))) /
            (window.innerHeight * 5)
        ) + 1;

      for (let i = 1; i <= 302; i++) {
        const image = new Image();
        image.src = require(`../lib/assets/videos/inkVideo/${i}.jpg`);
        if (i === progress)
          image.onload = () => {
            canvasRef.current?.getContext('2d').drawImage(image, 0, 0);
          };
        images.push(image);
      }
      setInkVideo(images);
    };

    loadImages();

    window.addEventListener('resize', resizeSectionHeight);
    window.addEventListener('scroll', changeCurrentSection);

    return () => {
      window.removeEventListener('resize', resizeSectionHeight);
      window.removeEventListener('scroll', changeCurrentSection);
    };
  }, []);
  return (
    <Container>
      <Section
        section={0}
        currentSection={currentSection}
        height={sectionHeight}
      >
        <AnimationImage ref={canvasRef} width="3840" height="2160">
          현재 웹 브라우저를 지원하지 않습니다.
        </AnimationImage>
        <AnimationText
          fadeIn={{ startAt: 0.2, endAt: 0.3 }}
          fadeOut={{ startAt: 0.35, endAt: 0.4 }}
          currentPercent={currentPercent}
        >
          모각소
        </AnimationText>
        <AnimationText
          fadeIn={{ startAt: 0.4, endAt: 0.5 }}
          fadeOut={{ startAt: 0.55, endAt: 0.6 }}
          currentPercent={currentPercent}
        >
          화이팅!
        </AnimationText>
        <AnimationText
          fadeIn={{ startAt: 0.6, endAt: 0.7 }}
          fadeOut={{ startAt: 0.75, endAt: 0.8 }}
          currentPercent={currentPercent}
        >
          끼얏호!
        </AnimationText>
      </Section>
    </Container>
  );
};

export default Home;
