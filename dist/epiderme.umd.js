(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'styled-components'], factory) :
  (global = global || self, global.Epiderme = factory(global.React, global.PropTypes, global.styled));
}(this, function (React, PropTypes, styled) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

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

  return main;

}));
