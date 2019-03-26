import React from 'react';
import { ButtonComponentStyled } from './Style';

const ButtonComponent = (props)=> {
  return (
    <div className='button-component-module'>
      <ButtonComponentStyled>
        {props.children}
      </ButtonComponentStyled>
    </div>
  );
}

export default ButtonComponent;
