import styled from 'styled-components';
import TextBtn from '../button/TextBtn';
import Text from '../../components/typography/Text';
import { useNavigate } from 'react-router-dom';
import Symbol from '../../lib/assets/images/Profile.png';

const Container = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: white;
  opacity: 0.8;
  box-shadow: 0.1rem 0.2rem 0.3rem gray;
`;

const Content = styled.span`
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
      <TextBtn
        margin="0.5rem 1rem 0.5rem 1rem"
        onClick={() => {
          navigate('/');
        }}
      >
        <Content>
          <Image height="50rem" src={Symbol} alt="logo" />
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
    </Container>
  );
};

export default Header;
