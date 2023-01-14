import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Text from '../components/typography/Text';
import displayImg from '../lib/assets/images/picture.jpg';

const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  border: 2px solid red;
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
  @media (min-width: 1024px) {
    top: calc(50% - 5rem);
    font-size: 7vw;
  }
`;

const Image = styled.img`
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

  useEffect(() => {
    const resizeSectionHeight = () => {
      setSectionHeight(window.innerHeight * 5);
    };
    const changeCurrentSection = () => {
      setCurrentSection(Math.floor(window.scrollY / sectionHeight));
      setCurrentPercent((window.scrollY % sectionHeight) / sectionHeight);
    };

    window.addEventListener('resize', resizeSectionHeight);
    window.addEventListener('scroll', changeCurrentSection);

    return () => {
      window.removeEventListener('resize', resizeSectionHeight);
      window.removeEventListener('scroll', changeCurrentSection);
    };
  });

  return (
    <Container>
      <Section
        section={0}
        currentSection={currentSection}
        height={sectionHeight}
      >
        <Text>hi</Text>
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
      <Section
        section={1}
        currentSection={currentSection}
        height={sectionHeight}
      >
        <Text>hello</Text>
      </Section>
      <Section
        section={2}
        currentSection={currentSection}
        height={sectionHeight}
      >
        <Image src={displayImg} />
      </Section>
    </Container>
  );
};

export default Home;
