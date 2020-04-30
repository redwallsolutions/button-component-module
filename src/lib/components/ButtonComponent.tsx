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
  shouldFitContainer,
  disabled,
  ...rest
}) => {
  const innerOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isLoading && !disabled && onClick) {
      setTimeout(() => {
        onClick(event);
      }, 200);
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
      <Ink radius={1000} duration={1200} />
    </Button>
  );
};

export default ButtonComponent;
