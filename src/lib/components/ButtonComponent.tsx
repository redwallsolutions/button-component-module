import React, { FC, ButtonHTMLAttributes, useContext, MouseEvent } from "react";
import Ink from "react-ink";
import { Button, LoaderContainer, theming, TextContainer } from "./Style";
import { ThemeContext } from "styled-components";
import { IButtonStyled } from "./interfaces";
import ClipLoader from "react-spinners/ClipLoader";

const defaultTheme = {
  mode: "light",
};

const ButtonComponent: FC<ButtonHTMLAttributes<HTMLButtonElement> &
  IButtonStyled> = ({
  children,
  theme,
  isLoading,
  onClick,
  appearance = "default",
  variant = "contained",
  border = "rounded",
  shouldFitContainer,
  disabled,
  ...rest
}) => {
  const innerOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!isLoading && !disabled && onClick) {
      onClick(event);
    }
  };

  const themeToApply = theme || useContext(ThemeContext) || defaultTheme;
  const contrast = theming({ theme: themeToApply, appearance }).contrast({
    theme: themeToApply,
    appearance,
  });
  return (
    <Button
      theme={themeToApply}
      border={border}
      appearance={appearance}
      variant={variant}
      onClick={innerOnClick}
      disabled={disabled || isLoading}
      shouldFitContainer={shouldFitContainer}
      {...rest}
    >
      <TextContainer isLoading={isLoading}>{children}</TextContainer>
      <LoaderContainer isLoading={isLoading}>
        <ClipLoader size={20} color={contrast} />
      </LoaderContainer>
      <Ink radius={1000} opacity={0.3} duration={1000} background={false} />
    </Button>
  );
};

export default ButtonComponent;
