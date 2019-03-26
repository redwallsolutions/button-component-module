import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 35px;\n  outline: no;\n  border: .5px solid ", ";\n  border-radius: 4px;\n  font-size: 17px;\n  color: #fff;\n  background-color: ", ";\n  transition: background .2s, color .2s, border .1s;\n  cursor: pointer;\n  transition: opacity .5s, transform .2s ease-in-out;\n  &:hover {\n\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  @font-face {\n    font-family: Poppins;\n    src: ", ", format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .button-component-module {\n    font-family: Poppins, sans-serif;\n  }\n  .button-component-module * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
export var GlobalStyle = createGlobalStyle(_templateObject(), Poppins);
export var ButtonComponentStyled = styled.button(_templateObject2(), function (props) {
  return props.theme.button.primary;
}, function (props) {
  return props.theme.button.bgPrimary;
});
ButtonComponentStyled.defaultProps = {
  theme: {
    button: {
      primary: 'rgba(226, 19, 6, 0.44)',
      bgPrimary: 'rgba(226, 19, 6, 0.79)'
    }
  }
};