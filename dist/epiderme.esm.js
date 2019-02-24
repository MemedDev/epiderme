import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  color: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.button(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primary;
});
Button.defaultProps = {
  theme: {
    primary: '#0074D9'
  }
};

var Component = function Component(_ref) {
  var children = _ref.children;
  return React.createElement(Button, {
    type: "button"
  }, children);
};

Component.propTypes = {
  children: PropTypes.node.isRequired
};

var main = {
  Button: Component
};

export default main;
