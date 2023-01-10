import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.button`
  border-radius: 0.25rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default function TextBtn(props) {
  const {
    children,
    width = 'auto',
    height = 'auto',
    backgroundColor = 'transparent',
    padding = 0,
    margin = 0,
    ...rest
  } = props;
  return (
    <Component
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      {...rest}
    >
      {children}
    </Component>
  );
}

TextBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
