import React from 'react';
import { ButtonComponentStyled, ButtonIconStyled, ButtonTextStyled , LoaderContainer} from './Style';
import { ClipLoader } from 'react-spinners';

const ButtonComponent = (props) => {
  const hasChildren = props.children ? true :  false
  const hasBeforeIcon = props.beforeIcon ? true : false
  const hasAfterIcon = props.afterIcon ? true : false
  const {title, type, loading, ...rest} = props;
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
            <React.Fragment>
              <ButtonTextStyled loading={props.loading}>
                {props.children}
              </ButtonTextStyled>
              <LoaderContainer loading={props.loading} appearance={props.appearance}>
                <ClipLoader size={14} />
              </LoaderContainer>
            </React.Fragment>
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
