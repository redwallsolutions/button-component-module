import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled } from './Style';

const ButtonComponent = (props) => {
  return (
    <div className='button-component-module'>
      <ButtonComponentStyled {...props}>
        <ButtonIconStyled isBefore={props.children}>{props.beforeIcon}</ButtonIconStyled>
        {props.children}
        {props.loading && ' ...'}
        <ButtonIconStyled isAfter={props.children}>{props.afterIcon}</ButtonIconStyled>
      </ButtonComponentStyled>
    </div>
  );
}

export default ButtonComponent;
