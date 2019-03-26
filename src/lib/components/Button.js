import React, { Component } from 'react';
import { GlobalStyle } from './Style';
import ButtonComponent from './ButtonComponent';
class Button extends Component {

  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <ButtonComponent>
          {this.props.children}
        </ButtonComponent>
      </React.Fragment>
    );
  }

}

export default Button;
