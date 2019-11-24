import React, { FC, ButtonHTMLAttributes, useContext, MouseEvent } from 'react'
import Ink from 'react-ink'
import { Button, LoaderContainer, theming, TextContainer } from './Style'
import { ThemeContext } from 'styled-components'
import { IButtonStyled } from './interfaces'
import ClipLoader from 'react-spinners/ClipLoader'

const ButtonComponent: FC<ButtonHTMLAttributes<HTMLButtonElement> &
	IButtonStyled> = ({
	children,
	theme = { mode: 'light', default: '#6200eeff' },
	isLoading,
	onClick,
	appearance = 'default',
	disabled,
	...rest
}) => {
	const innerOnClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (!isLoading && !disabled && onClick) {
			onClick(event)
		}
	}

	const themeToApply = useContext(ThemeContext) || theme
	console.log(themeToApply)
	const contrast = theming({theme: themeToApply, appearance}).contrast({theme: themeToApply, appearance})
	console.log(contrast)
	return (
		<div className="button-component-module">
			<Button
				theme={themeToApply}
				appearance={appearance}
				onClick={innerOnClick}
				disabled={disabled}
				{...rest}
			>
				<TextContainer
					isLoading={isLoading}
					appearance={appearance}
					theme={themeToApply}
				>
					{children}
				</TextContainer>
				<LoaderContainer isLoading={isLoading}>
					<ClipLoader size={20} color={contrast} />
				</LoaderContainer>
				<Ink radius={1000} duration={1200} />
			</Button>
		</div>
	)
}

export default ButtonComponent
