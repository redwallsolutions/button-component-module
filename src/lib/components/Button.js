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
    const {appearance, size, disabled, loading, afterIcon, isCircle} = this.props;
    return (
      <React.Fragment>
        <GlobalStyle/>
        <ButtonComponent isCircle={isCircle} afterIcon={afterIcon} appearance={appearance} size={size} disabled={disabled} loading={loading} onClick={this.onClick}>
          {this.props.children}
        </ButtonComponent>
      </React.Fragment>
    );
  }

}

export default Button;
