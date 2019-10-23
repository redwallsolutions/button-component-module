import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled, LoaderContainer } from './Style';
import { ClipLoader } from 'react-spinners';

var ButtonComponent = function ButtonComponent(_ref) {
  var appearance = _ref.appearance,
      beforeIcon = _ref.beforeIcon,
      children = _ref.children,
      afterIcon = _ref.afterIcon,
      isLoading = _ref.isLoading,
      title = _ref.title,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ["appearance", "beforeIcon", "children", "afterIcon", "isLoading", "title", "type"]);

  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, Object.assign({}, rest, {
    appearance: appearance,
    title: title || children,
    type: type || 'button'
  }), beforeIcon && React.createElement(ButtonIconStyled, {
    isLoading: isLoading,
    appearance: appearance,
    isBefore: children
  }, beforeIcon), children && React.createElement(React.Fragment, null, React.createElement(ButtonTextStyled, {
    appearance: appearance,
    isLoading: isLoading
  }, children), React.createElement(LoaderContainer, {
    isLoading: isLoading,
    appearance: appearance
  }, React.createElement(ClipLoader, {
    size: 14
  }))), afterIcon && React.createElement(ButtonIconStyled, {
    isLoading: isLoading,
    appearance: appearance,
    isAfter: children
  }, afterIcon)));
};

export default ButtonComponent;