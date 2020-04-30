import styled from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import Color from "color";
import { IButtonStyled } from "./interfaces";

const borderStyles = {
  rounded: 4,
  fullrounded: 1000,
  rect: 0,
};

export const theming = createThemeWithAppearance();

export const Button = styled.button<IButtonStyled>`
	display: inline-block;
	font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
	&::-moz-focus-inner {
			border: 0;
	}
	box-sizing: border-box;
	outline: none;
	position: relative;
	width: ${(props) => (props.shouldFitContainer ? "100%" : "auto")};
	height: 36px;
	border: none;
	border-radius: ${({ border = "rounded" }) => borderStyles[border]}px;
	padding: 0 ${({ border }) => (border === "fullrounded" ? 22 : 16)}px;
	background-color: ${(props) =>
    props.variant === "contained" ? theming(props).color : "transparent"};
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
	color: ${(props) =>
    props.variant === "contained"
      ? Color(theming(props).contrast(props))
          .grayscale()
          .toString()
      : theming(props).color};
	${(props) =>
    props.variant === "contained" &&
    "box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);"}
	&:hover {
		${(props) =>
      props.variant === "contained" &&
      "box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.2);"}
		background-color: ${(props) =>
      props.variant === "contained"
        ? Color(theming(props).color(props))
            .lighten(0.1)
            .toString()
        : Color(theming(props).color(props))
            .alpha(0.1)
            .toString()};
	}
	&:active {
		box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
	}
	&:focus {
		outline: none;
		background-color: ${(props) =>
      props.variant === "contained"
        ? Color(theming(props).color(props))
            .lighten(0.1)
            .toString()
        : Color(theming(props).color(props))
            .alpha(0.1)
            .toString()};
	}
	&:disabled {
		filter: grayscale(.5);
		opacity: .5;
		cursor: not-allowed;
	}
`;

export const TextContainer = styled.span<IButtonStyled>`
  display: inline-block;
  transform: scale(${(props) => (props.isLoading ? 0.6 : 1)});
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
`;
export const LoaderContainer = styled.div<IButtonStyled>`
  transform: scale(${(props) => (props.isLoading ? 1 : 0)});
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 10px);
`;
