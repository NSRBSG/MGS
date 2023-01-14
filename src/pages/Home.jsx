import styled from 'styled-components';
import displayImg from '../lib/assets/images/picture.jpg';

const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 5rem);
  object-fit: cover;
`;

const Home = () => {
  return (
    <Container>
      <Image src={displayImg} />
    </Container>
  );
};

export default Home;
