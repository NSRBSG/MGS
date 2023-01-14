import styled from 'styled-components';
import CuteMouse from '../components/pointer/CuteMouse';
import displayImg from '../lib/assets/images/picture.jpg';
const Container = styled.div`
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
      <CuteMouse></CuteMouse>
      <Image src={displayImg} />
    </Container>
  );
};

export default Home;
