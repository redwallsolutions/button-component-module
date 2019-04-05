import styled, {createGlobalStyle, css} from 'styled-components'
import Poppins from './../assets/fonts/Poppins-Regular.ttf';
import Color from 'color';
import theming from 'styled-theming';

const defaultPrimaryLight = '#E20613'
const defaultSecondaryLight = '#f8694f'
const defaultDefaultLight = '#dfe0e2'
const defaultPrimaryContrastLight = '#f9f9f9'
const defaultSecondaryContrastLight = '#fff'
const defaultDefaultLightContrast = '#2e3439'
const defaultPrimaryDark = 'rgba(85, 95, 98, 1)'
const defaultSecondaryDark = 'rgba(92, 59, 59, 1)'
const defaultPrimaryContrastDark = '#fffaf9'
const defaultSecondaryContrastDark = '#f7f0f0'

const theme = theming.variants('mode', 'appearance', {
  primary: {
    light: {
      color: props => props.theme.primary || defaultPrimaryLight,
      contrast: props => props.theme.primaryContrast || defaultPrimaryContrastLight
    },
    dark: {
      color: props => props.theme.primaryDark || defaultPrimaryDark,
      contrast: props => props.theme.primaryDarkContrast || defaultPrimaryContrastDark
    }
  },
  secondary: {
    light: {
      color: props => props.theme.secondary || defaultSecondaryLight,
      contrast: props => props.theme.secondaryContrast || defaultPrimaryContrastLight
    },
    dark: {
      color: props => props.theme.secondaryDark || defaultSecondaryDark,
      contrast: props => props.theme.secondaryDarkContrast || defaultSecondaryContrastDark
    }
  },
  default: {
    light: {
      color: props => props.theme.default || defaultDefaultLight,
      contrast: props => props.theme.defaultContrast || defaultDefaultLightContrast
    },
    dark: {
      color: props => props.theme.defaultDark || Color(defaultDefaultLight).darken(0.1).string(),
      contrast: props => props.theme.defaultDarkContrast || props.theme.defaultDefaultLightContrast
    }
  }
})

export const ButtonGlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Poppins;
    src: ${Poppins}, format("TrueType");
    font-display: fallback;
  }

  .button-component-module {
    display: inline-block;
    margin: 0.5em;
    position: relative;
  }
  .button-component-module * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }
`

const disabledButton = css`
  opacity: 0.4;
  cursor:not-allowed;
`
const hoveredButton = css`
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);
  background-color: ${props => Color(theme(props).color(props)).alpha(0.8).string()};
`

const activeButton = css`
  box-shadow: 0 2px 10px -1px rgba(0,0,0,0.2);
  background-color: ${props => Color(theme(props).color(props)).darken(0.2).string()};
`

const ButtonComponentStyled = styled.button`
  transition: all .2s ease-in-out;
  min-width: 64px;
  max-height: 36px;
  padding: 8px 16px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2.5px 7.5px 0 rgba(0,0,0,0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3px solid rgba(0,0,0,0.05);
  opacity: 1;
  background-color: ${props => theme(props).color};
  color: ${props => theme(props).contrast};

  &:enabled {
    outline: 0;
  }

  &:disabled {
    ${disabledButton}
  }

  &:hover:not([disabled]) {
    ${hoveredButton}
  }

  &:active:not([disabled]) {
    ${activeButton}
  }
`

ButtonComponentStyled.defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
}

export {ButtonComponentStyled}

export const ButtonTextStyled = styled.span`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  font-weight: bold;
  line-height: 18px;
  font-size: 14px;
  letter-spacing: .4px;
`

const applyCSSWhenNotDisabled = css`
  &:hover {
    background-color: ${props => Color(props.theme.button[props.appearance]).lighten(0.05).string()};
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.18);
    outline: 0;
  }

  &:focus {
    background-color: ${props => Color(props.theme.button[props.appearance]).darken(0.2).string()};
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.15);
    outline: 0;
  }
`

const applyCSSWhenLoading = css`
  background-color: ${props => Color(props.theme.button[props.appearance]).darken(0.2).string()};
  border-color: ${props => Color(props.theme.button[props.appearance]).darken(0.2).string()};
  color: ${
    props=>
      Color(props.theme.button[props.appearance]).isDark() ?
        Color(props.theme.button[props.appearance]).lighten(1).string() :
        Color(props.theme.button[props.appearance]).darken(0).string()
  };
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

export const ButtonIconStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin${props => props.isBefore ? '-right: 10' : (props.isAfter ? '-left: 10' : ':0')}px;
`
