import React from 'react'
import {
	ButtonComponentStyled,
	ButtonIconStyled,
	ButtonTextStyled,
	LoaderContainer
} from './Style'
import { ClipLoader } from 'react-spinners'

const ButtonComponent = ({
	appearance,
	beforeIcon,
	children,
	afterIcon,
	isLoading,
	title,
	type,
	...rest
}) => {
	return (
		<div className="button-component-module">
			<ButtonComponentStyled
				{...rest}
				appearance={appearance}
				title={title || children}
				type={type || 'button'}
			>
				{beforeIcon && (
					<ButtonIconStyled
						isLoading={isLoading}
						appearance={appearance}
						isBefore={children}
					>
						{beforeIcon}
					</ButtonIconStyled>
				)}
				{children && (
					<>
						<ButtonTextStyled appearance={appearance} isLoading={isLoading}>
							{children}
						</ButtonTextStyled>
						<LoaderContainer isLoading={isLoading} appearance={appearance}>
							<ClipLoader size={14} />
						</LoaderContainer>
					</>
				)}
				{afterIcon && (
					<ButtonIconStyled
						isLoading={isLoading}
						appearance={appearance}
						isAfter={children}
					>
						{afterIcon}
					</ButtonIconStyled>
				)}
			</ButtonComponentStyled>
		</div>
	)
}

export default ButtonComponent
