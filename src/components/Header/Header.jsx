import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styles';

const Header = (props) => {
  const {
    title,
    subtitle,
    thumbnail,
    icon,
    alignText,
    divider,
    dividerColor,
    ...attributes
  } = props;
  const dividerClass = divider ? 'withDivider' : '';

  return (
    <StyledHeader {...attributes}>

      <StyledHeader.ColumnLeft {...attributes}>
        {thumbnail}
      </StyledHeader.ColumnLeft>

      <StyledHeader.ColumnRight alignText={alignText} {...attributes}>
        <StyledHeader.Title className={dividerClass} dividerColor={dividerColor} {...attributes}>
          {title}
        </StyledHeader.Title>

        {subtitle}
      </StyledHeader.ColumnRight>

      {icon}
    </StyledHeader>
  );
};

Header.defaultProps = {
  subtitle: '',
  thumbnail: '',
  icon: [],
  alignText: 'left',
  divider: false,
  dividerColor: '#333',
};

Header.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  thumbnail: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  icon: PropTypes.node,
  alignText: PropTypes.oneOf([
    'left',
    'right',
    'center',
  ]),
  divider: PropTypes.bool,
  dividerColor: PropTypes.string,
};

export default Header;
