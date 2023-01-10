import PropTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) =>
    props.fontFamily === 'ko' ? 'NanumGothic' : 'NanumGothicCoding'};
  font-size: ${(props) => `${props.fontSize}rem`};
  margin: ${(props) => `${props.margin}`};
`;

export default function Text(props) {
  const {
    children,
    color = 'black',
    fontWeight = 'normal',
    fontFamily = 'ko',
    fontSize = 1,
    margin = 0,
    ...rest
  } = props;
  return (
    <Component
      color={color}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      fontSize={fontSize}
      margin={margin}
      {...rest}
    >
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.oneOf(['ko', 'en']),
  fontSize: PropTypes.number,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
