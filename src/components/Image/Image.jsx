import React from 'react';
import PropTypes from 'prop-types';

import StyledImage from './styles';

const Image = (props) => {
  const { alt, src, ...attributes } = props;

  return (
    <StyledImage alt={alt} src={src} {...attributes} />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Image;
