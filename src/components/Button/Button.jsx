import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styles';

const Button = (props) => {
  const {
    children,
    ...attributes
  } = props;

  return (
    <StyledButton {...attributes}>{children}</StyledButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'accent',
  ]),
};

export default Button;
