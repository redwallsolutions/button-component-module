import styled, { createGlobalStyle } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import Color from 'color'
import { IButtonStyled } from './interfaces'

export const theming = createThemeWithAppearance()

export const Reset = createGlobalStyle`
	.button-component-module {
		padding: 0;
		margin: 0;
		font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
		* {
			box-sizing: border-box;
			transition: 0.2s;
			outline: none;
		}
	}
`

export const Button = styled.button<IButtonStyled>`
	display: inline-block;
	position: relative;
	min-width: 64px;
	height: 36px;
	border: none;
	border-radius: 4px;
	padding: 0 16px;
	background-color: ${props => theming(props).color};
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
	color: ${props =>
		Color(theming(props).contrast(props))
			.grayscale()
			.toString()};
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
	&:hover {
		box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
		background-color: ${props =>
			Color(theming(props).color(props))
				.lighten(0.1)
				.toString()};
	}
	&:active {
		box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.22);
	}
	&:focus {
		outline: none;
	}
`

export const TextContainer = styled.span<IButtonStyled>`
	display: inline-block;
	transform: scale(${props => (props.isLoading ? 0.6 : 1)});
	opacity: ${props => (props.isLoading ? 0 : 1)};
`
export const LoaderContainer = styled.div<IButtonStyled>`
	transform: scale(${props => (props.isLoading ? 1 : 0)});
	opacity: ${props => (props.isLoading ? 1 : 0)};
	position: absolute;
	left: calc(50% - 10px);
	top: calc(50% - 10px);
`
