import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.input`
  border: ${(props) => props.border};
  border-radius: 0.25rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default function Input(props) {
  const {
    border = '1.5px solid gray',
    width = '20rem',
    height = '3rem',
    padding = 0,
    margin = 0,
    ...rest
  } = props;
  return (
    <Component
      border={border}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      {...rest}
    ></Component>
  );
}

Input.propTypes = {
  border: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
