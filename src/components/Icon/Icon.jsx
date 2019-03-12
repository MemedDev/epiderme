import React from 'react';
import PropTypes from 'prop-types';

import StyledIcon from './styles';

const Icon = props => <StyledIcon {...props} aria-hidden="true" />;

Icon.defaultProps = {
  size: 'medium',
  type: 'regular',
  animation: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'regular',
    'inherit',
  ]),
  type: PropTypes.oneOf([
    'solid',
    'regular',
    'light',
  ]),
  animation: PropTypes.oneOf([
    '',
    'spin',
  ]),
};

export default Icon;
