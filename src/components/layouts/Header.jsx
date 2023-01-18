import styled from 'styled-components';
import TextBtn from '../button/TextBtn';
import Text from '../typography/Text';
import { useNavigate } from 'react-router-dom';
import Symbol from '../../lib/assets/images/Profile.png';

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 3.25rem;
  background-color: white;
  opacity: 0.8;
  box-shadow: 0.1rem 0.2rem 0.3rem gray;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Content = styled.span`
  height: 100%;
  color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: ${(props) => props.margin};
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <TextBtn
          margin="0.5rem 1rem 0.5rem 1rem"
          onClick={() => {
            navigate('/');
          }}
        >
          <Content>
            <Image height="100%" src={Symbol} alt="logo" />
            <Text fontFamily="en" fontSize={1.5} fontWeight="800">
              NSRBSG
            </Text>
          </Content>
        </TextBtn>
        <TextBtn
          margin="0 1rem 0 auto"
          onClick={() => {
            navigate('/story');
          }}
        >
          <Content>
            <Text fontFamily="en" fontWeight="800">
              STORY
            </Text>
          </Content>
        </TextBtn>
      </Wrapper>
    </Container>
  );
};

export default Header;
