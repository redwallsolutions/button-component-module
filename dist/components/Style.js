import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin", "px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  transition: opacity .3s ease-in-out, transform .3s ease-in-out;\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  line-height: 18px;\n  font-size: 14px;\n  letter-spacing: .4px;\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  transition: all .3s ease-out;\n  position: absolute;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  ", "\n  div {\n    border-color: ", ";\n    border-bottom-color: transparent;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  transform: scale(0);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  visibility: visible;\n  opacity: 1;\n  transform: scale(1);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  transition: all .2s ease-in-out;\n  min-width: ", "px;\n  max-height: ", "px;\n  padding: ", ";\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0 2.5px 7.5px 0 rgba(0,0,0,0.15);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.3px solid rgba(0,0,0,0.05);\n  opacity: 1;\n  background-color: ", ";\n  color: ", ";\n\n\n  &:enabled {\n    outline: 0;\n  }\n\n  &:disabled {\n    ", "\n  }\n\n  &:hover:not([disabled]) {\n    ", "\n  }\n\n  &:focus:not([disabled]) {\n    ", "\n  }\n\n  &:active:not([disabled]) {\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 2px 10px -1px rgba(0,0,0,0.2);\n  background-color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);\n  background-color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.4;\n  cursor:not-allowed;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .button-component-module {\n    display: inline-block;\n    margin: 0.5em;\n    position: relative;\n    font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, css } from 'styled-components';
import Color from 'color';
import Theming from 'theming-component-module';
var theme = Theming.createThemeWithAppearance();
var defaultTheme = {
  theme: {
    mode: 'light'
  }
};

var defaultProps = _objectSpread({}, defaultTheme);

defaultProps.appearance = 'default';
defaultProps.size = 'medium';
export var ButtonGlobalStyle = createGlobalStyle(_templateObject());
var disabledButton = css(_templateObject2());
var hoveredButton = css(_templateObject3(), function (props) {
  return props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(0.1).string() : Color(theme(props).color(props)).lighten(0.2).string();
});
var activeButton = css(_templateObject4(), function (props) {
  return props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(0.2).string() : Color(theme(props).color(props)).darken(0.2).string();
});
var ButtonComponentStyled = styled.button(_templateObject5(), function (props) {
  return console.log(props.appearance, props.theme.mode, theme(props).color(props));
}, function (props) {
  return props.size === 'medium' ? 64 : props.size === 'small' ? 54 : 74;
}, function (props) {
  return props.size === 'medium' ? 36 : props.size === 'small' ? 30 : 42;
}, function (props) {
  return props.size === 'medium' ? '8px 16px' : props.size === 'small' ? '6px 12px' : '9px 19px';
}, function (props) {
  return props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.15).string() : theme(props).color;
}, function (props) {
  return props.appearance === 'default' && props.theme.mode === 'light' ? theme(props).color : theme(props).contrast;
}, disabledButton, hoveredButton, hoveredButton, activeButton);
ButtonComponentStyled.defaultProps = defaultProps;
export { ButtonComponentStyled };
var loadingSpinner = css(_templateObject6());
var loadingButtonText = css(_templateObject7());
var LoaderContainer = styled.div(_templateObject8(), function (props) {
  return props.loading && loadingSpinner;
}, function (props) {
  return props.appearance === 'default' && props.theme.mode === 'light' ? theme(props).color : theme(props).contrast;
});
LoaderContainer.defaultProps = defaultProps;
export { LoaderContainer };
var ButtonTextStyled = styled.span(_templateObject9(), function (props) {
  return props.loading && loadingButtonText;
});
ButtonTextStyled.defaultProps = defaultProps;
export { ButtonTextStyled };
export var ButtonIconStyled = styled.span(_templateObject10(), function (props) {
  return props.isBefore ? '-right: 10' : props.isAfter ? '-left: 10' : ':0';
});