import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles';

const Button = (props) => {
  const {
    children,
    component,
    ...attributes
  } = props;

  return (
    <StyledButton
      as={component}
      {...attributes}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'default',
  component: 'button',
  aspect: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'accent',
  ]),
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  aspect: PropTypes.oneOf([
    'button',
    'link',
  ]),
};

export default Button;
