import React from 'react';
import { ButtonComponentStyled } from './Style';

var ButtonComponent = function ButtonComponent(props) {
  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, props, props.children, props.loading && ' ...'));
};

export default ButtonComponent;