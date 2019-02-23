import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({ children, isDanger, isSuccess }) => {
  const buttonClass = classnames('button', {
    'button--is-danger': isDanger,
    'button--is-success': isSuccess,
  });

  return (
    <button type="button" className={buttonClass}>{children}</button>
  );
};

Button.defaultProps = {
  isDanger: false,
  isSuccess: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDanger: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

export default Button;
