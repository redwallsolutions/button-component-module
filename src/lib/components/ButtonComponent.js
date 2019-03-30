import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled } from './Style';

const ButtonComponent = (props) => {
  const hasChildren = props.children ? true :  false
  const hasBeforeIcon = props.beforeIcon ? true : false
  const hasAfterIcon = props.afterIcon ? true : false
  const {title, type, ...rest} = props;
  return (
    <div className='button-component-module'>
      <ButtonComponentStyled {...rest} title={title || props.children} type={type || 'button'}>
        {
          hasBeforeIcon && (
            <ButtonIconStyled isBefore={hasChildren}>{props.beforeIcon}</ButtonIconStyled>
          )
        }
        {
          hasChildren && (
            <ButtonTextStyled>
              {props.children}
              {props.loading && '...'}
            </ButtonTextStyled>
          )
        }
        {
          hasAfterIcon && (
            <ButtonIconStyled isAfter={hasChildren}>{props.afterIcon}</ButtonIconStyled>
          )
        }
      </ButtonComponentStyled>
    </div>
  );
}

export default ButtonComponent;
