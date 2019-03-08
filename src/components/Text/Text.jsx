import React from 'react';
import PropTypes from 'prop-types';

import StyledText from './styles';

const Text = (props) => {
  const {
    children,
    component,
    ...attributes
  } = props;

  return (
    <StyledText as={component} {...attributes}>
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  align: 'inherit',
  color: 'default',
  component: 'p',
  scale: 'body1',
  weight: 'regular',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf([
    'inherit',
    'left',
    'center',
    'right',
    'justify',
  ]),
  color: PropTypes.oneOf([
    'default',
    'primary',
    'accent',
    'inherit',
    'black50',
    'black24',
  ]),
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  scale: PropTypes.oneOf([
    'body1',
    'caption1',
    'subtitle2',
  ]),
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'inherit',
  ]),
};

export default Text;
