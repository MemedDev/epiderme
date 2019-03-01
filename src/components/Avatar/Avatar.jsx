import React from 'react';
import PropTypes from 'prop-types';

import StyledAvatar from './styles';

const Avatar = (props) => {
  const { children, ...attributes } = props;

  return (
    <StyledAvatar {...attributes}>
      {children}
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  children: '',
};

Avatar.propTypes = {
  children: PropTypes.node,
};

export default Avatar;
