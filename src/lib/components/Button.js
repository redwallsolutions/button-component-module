import React, { Component } from 'react';
import { GlobalStyle } from './Style';
import ButtonComponent from './ButtonComponent';
class Button extends Component {

  onClick = (e) => {
    if(this.props.onClick && !this.props.loading){
      this.props.onClick(e)
    }
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle/>
        <ButtonComponent {...this.props} onClick={this.onClick}>
          {this.props.children}
        </ButtonComponent>
      </React.Fragment>
    );
  }

}

export default Button;
