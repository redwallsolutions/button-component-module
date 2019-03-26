import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  user-select: none;\n  padding: ", ";\n  outline: none;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  font-size: ", ";\n  color: ", ";\n  background-color: ", ";\n  transition: background .2s, color .2s, border .1s;\n  cursor: pointer;\n  transition: .3s ease-in-out;\n  ", "\n  ", "\n  ", "\n  &:disabled {\n    background-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  padding: 10px;\n  border-radius: 50%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  cursor: progress;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);\n  }\n\n  &:active {\n    transform: scale(0.97);\n    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.18);\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  @font-face {\n    font-family: Poppins;\n    src: ", ", format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .button-component-module {\n    font-family: Poppins, sans-serif;\n    margin: 0.5em;\n    position: relative;\n  }\n  .button-component-module * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, css } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
export var GlobalStyle = createGlobalStyle(_templateObject(), Poppins);
var applyCSSWhenNotDisabled = css(_templateObject2(), function (props) {
  return Color(props.theme.button[props.appearance]).lighten(0.05).string();
}, function (props) {
  return Color(props.theme.button[props.appearance]).darken(0.2).string();
});
var applyCSSWhenLoading = css(_templateObject3(), function (props) {
  return Color(props.theme.button[props.appearance]).desaturate(0.2).string();
});
var applyCSSWhenCircle = css(_templateObject4(), function (props) {
  return props.size === 'small' && '40px' || props.size === 'medium' && '60px' || props.size === 'large' && '80px';
}, function (props) {
  return props.size === 'small' && '40px' || props.size === 'medium' && '60px' || props.size === 'large' && '80px';
});
export var ButtonComponentStyled = styled.button(_templateObject5(), function (props) {
  return props.size === 'small' && '5px 15px' || props.size === 'medium' && '10px 20px' || props.size === 'large' && '15px 40px';
}, function (props) {
  return Color(props.theme.button[props.appearance]).string();
}, function (props) {
  return props.size === 'small' && '14px' || '16px';
}, function (props) {
  return Color(props.theme.button[props.appearance]).isDark() ? Color(props.theme.button[props.appearance]).lighten(1).lighten(1).opaquer(1).string() : Color(props.theme.button[props.appearance]).darken(0.7).string();
}, function (props) {
  return props.theme.button[props.appearance];
}, function (props) {
  return props.isCircle && applyCSSWhenCircle;
}, function (props) {
  return !props.disabled && !props.loading && applyCSSWhenNotDisabled;
}, function (props) {
  return props.loading && applyCSSWhenLoading;
}, function (props) {
  return Color(props.theme.button[props.appearance]).desaturate(0.2).string();
}, function (props) {
  return Color(props.theme.button[props.appearance]).isDark() ? Color(props.theme.button[props.appearance]).lighten(1).string() : Color(props.theme.button[props.appearance]).darken(0.2).string();
});
ButtonComponentStyled.defaultProps = {
  appearance: 'default',
  size: 'medium',
  theme: {
    button: {
      primary: 'rgba(226, 19, 6, 0.82)',
      default: 'rgb(233, 230, 230)'
    }
  }
};