import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled } from './Style';

var ButtonComponent = function ButtonComponent(props) {
  var hasChildren = props.children ? true : false;
  var hasBeforeIcon = props.beforeIcon ? true : false;
  var hasAfterIcon = props.afterIcon ? true : false;
  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, props, hasBeforeIcon && React.createElement(ButtonIconStyled, {
    isBefore: hasChildren
  }, props.beforeIcon), hasChildren && React.createElement(ButtonTextStyled, null, props.children, props.loading && '...'), hasAfterIcon && React.createElement(ButtonIconStyled, {
    isAfter: hasChildren
  }, props.afterIcon)));
};

export default ButtonComponent;