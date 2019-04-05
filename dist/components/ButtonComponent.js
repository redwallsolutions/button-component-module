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
      rest = _objectWithoutProperties(props, ["title", "type", "loading"]);

  return React.createElement("div", {
    className: "button-component-module"
  }, React.createElement(ButtonComponentStyled, Object.assign({}, rest, {
    title: title || props.children,
    type: type || 'button'
  }), hasBeforeIcon && React.createElement(ButtonIconStyled, {
    isBefore: hasChildren
  }, props.beforeIcon), hasChildren && React.createElement(React.Fragment, null, React.createElement(ButtonTextStyled, {
    loading: props.loading
  }, props.children), React.createElement(LoaderContainer, {
    loading: props.loading,
    appearance: props.appearance
  }, React.createElement(ClipLoader, {
    size: 14
  }))), hasAfterIcon && React.createElement(ButtonIconStyled, {
    isAfter: hasChildren
  }, props.afterIcon)));
};

export default ButtonComponent;