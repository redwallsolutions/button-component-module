import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled, LoaderContainer } from './Style';
import { ClipLoader } from 'react-spinners';

var ButtonComponent = function ButtonComponent(props) {
  var hasChildren = props.children ? true : false;
  var hasBeforeIcon = props.beforeIcon ? true : false;
  var hasAfterIcon = props.afterIcon ? true : false;

  var title = props.title,
      type = props.type,
      loading = props.loading,
      appearance = props.appearance,
      rest = _objectWithoutProperties(props, ["title", "type", "loading", "appearance"]);

  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, Object.assign({}, rest, {
    appearance: appearance,
    title: title || props.children,
    type: type || 'button'
  }), hasBeforeIcon && React.createElement(ButtonIconStyled, {
    appearance: appearance,
    isBefore: hasChildren
  }, props.beforeIcon), hasChildren && React.createElement(React.Fragment, null, React.createElement(ButtonTextStyled, {
    appearance: appearance,
    loading: props.loading
  }, props.children), React.createElement(LoaderContainer, {
    loading: props.loading,
    appearance: appearance
  }, React.createElement(ClipLoader, {
    size: 14
  }))), hasAfterIcon && React.createElement(ButtonIconStyled, {
    appearance: appearance,
    isAfter: hasChildren
  }, props.afterIcon)));
};

export default ButtonComponent;