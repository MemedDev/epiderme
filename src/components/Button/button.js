import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button.styles';

const Component = ({
  children,
  attributes,
  color,
}) => (
  <Button
    {...attributes}
    color={color}
  >
    {children}
  </Button>
);

Component.defaultProps = {
  attributes: {},
  color: 'default',
};

Component.propTypes = {
  children: PropTypes.node.isRequired,
  attributes: PropTypes.object,
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
