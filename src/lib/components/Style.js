import styled, {createGlobalStyle} from 'styled-components'

import Poppins from './../assets/fonts/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Poppins;
    src: ${Poppins}, format("TrueType");
    font-display: fallback;
  }

  .button-component-module {
    font-family: Poppins, sans-serif;
  }
  .button-component-module * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const ButtonComponentStyled = styled.button`
  padding: 10px 35px;
  outline: no;
  border: .5px solid ${props=> props.theme.button.primary};
  border-radius: 4px;
  font-size: 17px;
  color: #fff;
  background-color: ${props => props.theme.button.bgPrimary};
  transition: background .2s, color .2s, border .1s;
  cursor: pointer;
  transition: opacity .5s, transform .2s ease-in-out;
  &:hover {

  }
`
ButtonComponentStyled.defaultProps = {
  theme: {
    button: {
      primary: 'rgba(226, 19, 6, 0.44)',
      bgPrimary: 'rgba(226, 19, 6, 0.79)'
    }
  }
}
