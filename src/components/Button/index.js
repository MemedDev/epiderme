import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ children, isDanger }) => {
  const buttonClass = classnames('button', {
    'button--is-danger': isDanger,
  });

  return (
    <button type="button" className={buttonClass}>{children}</button>
  );
};

Button.defaultProps = {
  isDanger: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDanger: PropTypes.bool,
};

export default Button;
