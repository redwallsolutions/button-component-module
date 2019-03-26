import styled, {createGlobalStyle, css} from 'styled-components'

import Poppins from './../assets/fonts/Poppins-Regular.ttf';

import Color from 'color';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Poppins;
    src: ${Poppins}, format("TrueType");
    font-display: fallback;
  }

  .button-component-module {
    font-family: Poppins, sans-serif;
    margin: 0.5em;
    position: relative;
  }
  .button-component-module * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const applyCSSWhenNotDisabled = css`
  &:hover {
    background-color: ${props => Color(props.theme.button[props.appearance]).lighten(0.05).string()};
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.18);
  }

  &:focus {
    background-color: ${props => Color(props.theme.button[props.appearance]).darken(0.2).string()};
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);
  }
`

const applyCSSWhenLoading = css`
  background-color: ${props => Color(props.theme.button[props.appearance]).desaturate(0.2).string()};
  cursor: progress;
`
export const ButtonComponentStyled = styled.button`
  display: inline-block;
  user-select: none;
  padding: ${
    props =>
      (props.size === 'small' && '5px 15px') ||
      (props.size === 'medium' && '10px 20px') ||
      (props.size === 'large' && '15px 40px')
    };
  outline: none;
  border: 1px solid ${props=> Color(props.theme.button[props.appearance]).string()};
  border-radius: 4px;
  font-size: ${
    props =>
      (props.size === 'small' && '14px') ||
      '16px'
  };
  color: ${props=> Color(props.theme.button[props.appearance]).isDark() ? Color(props.theme.button[props.appearance]).lighten(1).lighten(1).opaquer(1).string() : Color(props.theme.button[props.appearance]).darken(0.7).string()};
  background-color: ${props => props.theme.button[props.appearance]};
  transition: background .2s, color .2s, border .1s;
  cursor: pointer;
  transition: .3s ease-in-out;
  ${props => !props.disabled && !props.loading && applyCSSWhenNotDisabled}
  ${props => props.loading && applyCSSWhenLoading}
  &:disabled {
    background-color: ${props => Color(props.theme.button[props.appearance]).desaturate(0.2).string()};
    cursor: not-allowed;
    color: ${
      props=>
        Color(props.theme.button[props.appearance]).isDark() ?
          Color(props.theme.button[props.appearance]).lighten(1).string() :
          Color(props.theme.button[props.appearance]).darken(0.2).string()
    };
  }
`
ButtonComponentStyled.defaultProps = {
  appearance: 'default',
  size: 'medium',
  theme: {
    button: {
      primary: 'rgba(226, 19, 6, 0.82)',
      default: 'rgb(233, 230, 230)'
    }
  }
}
