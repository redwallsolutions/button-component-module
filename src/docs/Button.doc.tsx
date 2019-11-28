import React, { FC } from 'react'
import { IButtonStyled } from '../lib/components/interfaces'

const Button: FC<IButtonStyled> = ({
	children,
	theme = { mode: 'light', default: '#6200eeff' },
	isLoading,
	appearance = 'default',
	variant = 'contained',
	shouldFitContainer,
	...rest
}) => {
	return null
}

export default Button
