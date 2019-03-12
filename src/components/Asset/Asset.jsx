import React from 'react';
import PropTypes from 'prop-types';

import StyledAsset from './styles';

const Asset = ({ thumbnail, children, ...attributes }) => (
  <StyledAsset {...attributes}>
    {thumbnail && <StyledAsset.Column>{thumbnail}</StyledAsset.Column>}
    <StyledAsset.Column content>{children}</StyledAsset.Column>
  </StyledAsset>
);

Asset.defaultProps = {
  children: null,
  thumbnail: null,
};

Asset.propTypes = {
  children: PropTypes.node,
  thumbnail: PropTypes.node,
};

export default Asset;
