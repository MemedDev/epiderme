import React from 'react';
import PropTypes from 'prop-types';

import StyledAssetDescription from './styles';
import Text from '../Text';

const AssetDescription = ({ children }) => (
  <StyledAssetDescription>
    <Text color="black50">{children}</Text>
  </StyledAssetDescription>
);

AssetDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AssetDescription;
