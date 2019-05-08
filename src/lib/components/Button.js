import React, { Component } from 'react';
import { ButtonGlobalStyle } from './Style';
import ButtonComponent from './ButtonComponent';
class Button extends Component {

  onClick = (e) => {
    if(this.props.onClick && !this.props.loading){
      this.props.onClick(e)
    }
  }

  render() {
    return (
      <>
        <ButtonGlobalStyle/>
        <ButtonComponent {...this.props} onClick={this.onClick}>
          {this.props.children}
        </ButtonComponent>
      </>
    );
  }
}

Button.defaulProps = {
  appearance: 'default'
}

export default Button;
