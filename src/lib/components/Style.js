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
    display: inline-block;
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

const applyCSSWhenCircle = css`
  width: ${
    props =>
      (props.size === 'small' && '40px') ||
      (props.size === 'medium' && '60px') ||
      (props.size === 'large' && '80px')
  };
  height: ${
    props =>
      (props.size === 'small' && '40px') ||
      (props.size === 'medium' && '60px') ||
      (props.size === 'large' && '80px')
  };
  padding: 10px;
  border-radius: 50%;
`
export const ButtonComponentStyled = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  user-select: none;
  padding: ${
    props =>
      (props.size === 'small' && '2.5px 7px') ||
      (props.size === 'medium' && '5px 15px') ||
      (props.size === 'large' && '10px 30px')
    };
  outline: none;
  border: 1px solid ${props=> Color(props.theme.button[props.appearance]).string()};
  border-radius: 4px;
  font-size: ${
    props =>
      (props.size === 'small' && '13px') ||
      '16px'
  };
  color: ${props=> Color(props.theme.button[props.appearance]).isDark() ? Color(props.theme.button[props.appearance]).lighten(1).lighten(1).opaquer(1).string() : Color(props.theme.button[props.appearance]).darken(0.7).string()};
  background-color: ${props => props.theme.button[props.appearance]};
  transition: background .2s, color .2s, border .1s;
  cursor: pointer;
  transition: .3s ease-in-out;
  ${props => props.isCircle && applyCSSWhenCircle}
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

export const ButtonIconStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1.2px;
  margin${props => props.isBefore ? '-right: 10' : (props.isAfter ? '-left: 10' : ':0')}px;
`
export const ButtonTextStyled = styled.span`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  width: 100px;
`
