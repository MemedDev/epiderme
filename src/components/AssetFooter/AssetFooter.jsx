import React from 'react';
import PropTypes from 'prop-types';

import StyledAssetFooter from './styles';

const AssetFooter = ({ children }) => (
  <StyledAssetFooter>{children}</StyledAssetFooter>
);

AssetFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AssetFooter;
