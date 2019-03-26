import React from 'react';
import { ButtonComponentStyled } from './Style';

const ButtonComponent = (props) => {
  return (
    <div className='button-component-module'>
      <ButtonComponentStyled {...props}>
        {props.beforeIcon}
        {props.children}
        {props.loading && ' ...'}
        {props.afterIcon}
      </ButtonComponentStyled>
    </div>
  );
}

export default ButtonComponent;
