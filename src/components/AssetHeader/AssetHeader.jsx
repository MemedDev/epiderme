import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Icon from '../Icon';
import Header from '../Header';

import StyledAssetHeader from './styles';

const AssetHeader = ({ title, subtitle, icon }) => (
  <Header
    title={
      <Text scale="subtitle2" component="h5" weight="semibold">{title}</Text>
    }
    subtitle={
      <Text scale="caption1" component="h6">{subtitle}</Text>
    }
    icon={(
      <StyledAssetHeader.IconContainer>
        <Icon name={icon} size="inherit" />
      </StyledAssetHeader.IconContainer>
    )}
  />
);

AssetHeader.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
};

AssetHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
};

export default AssetHeader;
