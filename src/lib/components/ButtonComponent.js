import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled , LoaderContainer} from './Style';
import { ClipLoader } from 'react-spinners';

const ButtonComponent = (props) => {
  const hasChildren = props.children ? true :  false
  const hasBeforeIcon = props.beforeIcon ? true : false
  const hasAfterIcon = props.afterIcon ? true : false
  const {title, type, isLoading, appearance, ...rest} = props;
  return (
    <div className='button-component-module'>
      <ButtonComponentStyled {...rest} appearance={appearance} title={title || props.children} type={type || 'button'}>
        {
          hasBeforeIcon && (
            <ButtonIconStyled appearance={appearance} isBefore={hasChildren}>{props.beforeIcon}</ButtonIconStyled>
          )
        }
        {
          hasChildren && (
            <>
              <ButtonTextStyled appearance={appearance} isLoading={props.isLoading}>
                {props.children}
              </ButtonTextStyled>
              <LoaderContainer isLoading={props.isLoading} appearance={appearance}>
                <ClipLoader size={14} />
              </LoaderContainer>
            </>
          )
        }
        {
          hasAfterIcon && (
            <ButtonIconStyled appearance={appearance} isAfter={hasChildren}>{props.afterIcon}</ButtonIconStyled>
          )
        }
      </ButtonComponentStyled>
    </div>
  );
}

export default ButtonComponent;
