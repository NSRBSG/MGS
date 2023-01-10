import styled from 'styled-components';
import Text from '../typography/Text';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  color: white;
  background-color: rgb(35, 35, 40);
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Text margin="1rem 0 1rem 1rem" color="white">
          아주대학교
        </Text>
        <Text margin="1rem 0 1rem 1rem" color="white">
          모각소
        </Text>
        <Text margin="1rem 0 1rem 1rem" color="white">
          화이팅
        </Text>
      </Content>
    </Container>
  );
};

export default Footer;
