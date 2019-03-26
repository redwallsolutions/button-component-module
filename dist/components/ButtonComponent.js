import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled } from './Style';

var ButtonComponent = function ButtonComponent(props) {
  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, props, React.createElement(ButtonIconStyled, {
    isBefore: props.children
  }, props.beforeIcon), props.children, props.loading && ' ...', React.createElement(ButtonIconStyled, {
    isAfter: props.children
  }, props.afterIcon)));
};

export default ButtonComponent;