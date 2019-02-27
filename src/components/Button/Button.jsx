import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles';

const Button = (props) => {
  const {
    children,
    color,
    ...attributes
  } = props;

  return (
    <StyledButton
      color={color}
      {...attributes}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'default',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ]),
};

export default Button;
