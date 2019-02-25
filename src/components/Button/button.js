import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.styles';

const Component = (props) => {
  const {
    children,
    color,
    ...attributes
  } = props;

  return (
    <Button
      color={color}
      {...attributes}
    >
      {children}
    </Button>
  );
};

Component.defaultProps = {
  color: 'default',
};

Component.propTypes = {
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

export default Component;
