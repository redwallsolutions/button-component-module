import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin", "px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  height: ", ";\n  padding: 10px;\n  border-radius: 50%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-color: ", ";\n  color: ", ";\n  cursor: progress;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  &:hover {\n    background-color: ", ";\n    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);\n  }\n\n  &:active {\n    transform: scale(0.97);\n    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.18);\n    outline: 0;\n  }\n\n  &:focus {\n    background-color: ", ";\n    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);\n    outline: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  line-height: 18px;\n  font-size: 14px;\n  letter-spacing: .4px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  transition: all .2s ease-in-out;\n  min-width: 64px;\n  max-height: 36px;\n  padding: 8px 16px;\n  cursor: pointer;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0 2.5px 7.5px 0 rgba(0,0,0,0.15);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0.3px solid rgba(0,0,0,0.05);\n  opacity: 1;\n  background-color: ", ";\n  color: ", ";\n\n  &:enabled {\n    outline: 0;\n  }\n\n  &:disabled {\n    ", "\n  }\n\n  &:hover:not([disabled]) {\n    ", "\n  }\n\n  &:active:not([disabled]) {\n    ", "\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n\n  @font-face {\n    font-family: Poppins;\n    src: ", ", format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .button-component-module {\n    display: inline-block;\n    margin: 0.5em;\n    position: relative;\n  }\n  .button-component-module * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: Poppins, sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, css } from 'styled-components';
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import theming from 'styled-theming';
var defaultPrimaryLight = '#E20613';
var defaultSecondaryLight = '#f8694f';
var defaultDefaultLight = '#dfe0e2';
var defaultPrimaryContrastLight = '#f9f9f9';
var defaultSecondaryContrastLight = '#fff';
var defaultDefaultLightContrast = '#2e3439';
var defaultPrimaryDark = 'rgba(85, 95, 98, 1)';
var defaultSecondaryDark = 'rgba(92, 59, 59, 1)';
var defaultPrimaryContrastDark = '#fffaf9';
var defaultSecondaryContrastDark = '#f7f0f0';
var theme = theming.variants('mode', 'appearance', {
  primary: {
    light: {
      color: function color(props) {
        return props.theme.primary || defaultPrimaryLight;
      },
      contrast: function contrast(props) {
        return props.theme.primaryContrast || defaultPrimaryContrastLight;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.primaryDark || defaultPrimaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.primaryDarkContrast || defaultPrimaryContrastDark;
      }
    }
  },
  secondary: {
    light: {
      color: function color(props) {
        return props.theme.secondary || defaultSecondaryLight;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryContrast || defaultPrimaryContrastLight;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.secondaryDark || defaultSecondaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryDarkContrast || defaultSecondaryContrastDark;
      }
    }
  },
  default: {
    light: {
      color: function color(props) {
        return props.theme.default || defaultDefaultLight;
      },
      contrast: function contrast(props) {
        return props.theme.defaultContrast || defaultDefaultLightContrast;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.defaultDark || Color(defaultDefaultLight).darken(0.1).string();
      },
      contrast: function contrast(props) {
        return props.theme.defaultDarkContrast || props.theme.defaultDefaultLightContrast;
      }
    }
  }
});
export var ButtonGlobalStyle = createGlobalStyle(_templateObject(), Poppins);
var disabledButton = css(_templateObject2());
var hoveredButton = css(_templateObject3(), function (props) {
  return Color(theme(props).color(props)).alpha(0.8).string();
});
var activeButton = css(_templateObject4(), function (props) {
  return Color(theme(props).color(props)).darken(0.2).string();
});
var ButtonComponentStyled = styled.button(_templateObject5(), function (props) {
  return theme(props).color;
}, function (props) {
  return theme(props).contrast;
}, disabledButton, hoveredButton, activeButton);
ButtonComponentStyled.defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
};
export { ButtonComponentStyled };
export var ButtonTextStyled = styled.span(_templateObject6());
var applyCSSWhenNotDisabled = css(_templateObject7(), function (props) {
  return Color(props.theme.button[props.appearance]).lighten(0.05).string();
}, function (props) {
  return Color(props.theme.button[props.appearance]).darken(0.2).string();
});
var applyCSSWhenLoading = css(_templateObject8(), function (props) {
  return Color(props.theme.button[props.appearance]).darken(0.2).string();
}, function (props) {
  return Color(props.theme.button[props.appearance]).darken(0.2).string();
}, function (props) {
  return Color(props.theme.button[props.appearance]).isDark() ? Color(props.theme.button[props.appearance]).lighten(1).string() : Color(props.theme.button[props.appearance]).darken(0).string();
});
var applyCSSWhenCircle = css(_templateObject9(), function (props) {
  return props.size === 'small' && '40px' || props.size === 'medium' && '60px' || props.size === 'large' && '80px';
}, function (props) {
  return props.size === 'small' && '40px' || props.size === 'medium' && '60px' || props.size === 'large' && '80px';
});
export var ButtonIconStyled = styled.span(_templateObject10(), function (props) {
  return props.isBefore ? '-right: 10' : props.isAfter ? '-left: 10' : ':0';
});