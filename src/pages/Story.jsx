import styled from 'styled-components';
import Text from '../components/typography/Text';

const Container = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Story = () => {
  return (
    <Container>
      <Text>Story</Text>
    </Container>
  );
};

export default Story;
