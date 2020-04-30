import styled from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import Color from "color";
import { IButtonStyled } from "./interfaces";

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
	border-radius: 4px;
	padding: 0 16px;
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
    "box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);"}
	&:hover {
		${(props) =>
      props.variant === "contained" &&
      "box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);"}
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
		box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.22);
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
