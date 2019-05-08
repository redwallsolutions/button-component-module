import styled, {createGlobalStyle, css} from 'styled-components'
import Color from 'color';
import Theming from 'theming-component-module';

const theme = Theming.createThemeWithAppearance()

const defaultTheme = {
  theme: {
    mode: 'light'
  }
}

const defaultProps = {...defaultTheme}
defaultProps.appearance = 'default'
defaultProps.size = 'medium'

export const ButtonGlobalStyle = createGlobalStyle`
  .button-component-module {
    display: inline-block;
    margin: 0.5em;
    position: relative;
    font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
  }
`

const disabledButton = css`
  opacity: 0.4;
  cursor:not-allowed;
`
const hoveredButton = css`
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.2);
  background-color: ${props => props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(0.1).string() : Color(theme(props).color(props)).lighten(0.2).string()};
`

const activeButton = css`
  box-shadow: 0 2px 10px -1px rgba(0,0,0,0.2);
  background-color: ${props => props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(0.2).string() : Color(theme(props).color(props)).darken(0.2).string()};
`

const ButtonComponentStyled = styled.button`
  transition: all .2s ease-in-out;
  min-width: ${props => props.size === 'medium' ? 64 : props.size === 'small' ? 54 : 74}px;
  max-height: ${props => props.size === 'medium' ? 36 : props.size === 'small' ? 30 : 42}px;
  padding: ${props => props.size === 'medium' ? '8px 16px' : props.size === 'small' ? '6px 12px': '9px 19px'};
  cursor: pointer;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2.5px 7.5px 0 rgba(0,0,0,0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3px solid rgba(0,0,0,0.05);
  opacity: 1;
  background-color: ${props => props.appearance === 'default' && props.theme.mode === 'light' ? Color(theme(props).contrast(props)).darken(.15).string() : theme(props).color};
  color: ${props => props.appearance === 'default' && props.theme.mode === 'light' ? theme(props).color : theme(props).contrast};


  &:enabled {
    outline: 0;
  }

  &:disabled {
    ${disabledButton}
  }

  &:hover:not([disabled]) {
    ${hoveredButton}
  }

  &:focus:not([disabled]) {
    ${hoveredButton}
  }

  &:active:not([disabled]) {
    ${activeButton}
  }
`

ButtonComponentStyled.defaultProps = defaultProps

export {ButtonComponentStyled}

const loadingSpinner = css`
  visibility: visible;
  opacity: 1;
  transform: scale(1);
`

const loadingButtonText = css`
  opacity: 0;
  transform: scale(0);
`

const LoaderContainer = styled.div`
  transition: all .3s ease-out;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  ${props => props.loading && loadingSpinner}
  div {
    border-color: ${props => props.appearance === 'default' && props.theme.mode === 'light' ? theme(props).color : theme(props).contrast};
    border-bottom-color: transparent;
  }
`
LoaderContainer.defaultProps = defaultProps

export {LoaderContainer}


const ButtonTextStyled = styled.span`
  transition: opacity .3s ease-in-out, transform .3s ease-in-out;
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  font-weight: bold;
  line-height: 18px;
  font-size: 14px;
  letter-spacing: .4px;
  ${props => props.loading && loadingButtonText}
`

ButtonTextStyled.defaultProps = defaultProps

export {ButtonTextStyled}

export const ButtonIconStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin${props => props.isBefore ? '-right: 10' : (props.isAfter ? '-left: 10' : ':0')}px;
`
