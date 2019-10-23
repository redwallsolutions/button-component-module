import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { ButtonGlobalStyle } from './Style';
import ButtonComponent from './ButtonComponent';

function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      isLoading = _ref.isLoading,
      rest = _objectWithoutProperties(_ref, ["onClick", "children", "isLoading"]);

  function innerOnClick(e) {
    if (onClick && !isLoading) {
      onClick(e);
    }
  }

  return React.createElement(React.Fragment, null, React.createElement(ButtonGlobalStyle, null), React.createElement(ButtonComponent, Object.assign({}, rest, {
    isLoading: isLoading,
    onClick: innerOnClick
  }), children));
}

Button.defaultProps = {
  size: 'md',
  appearance: 'default',
  disabled: false,
  isLoading: false,
  onClick: undefined
};
export default Button;