import React from 'react'
import { ButtonGlobalStyle } from './Style'
import ButtonComponent from './ButtonComponent'
import PropTypes from 'prop-types'


function Button({ onClick, children, isLoading, ...rest }) {
	function innerOnClick(e) {
		if (onClick && !isLoading) {
			onClick(e)
		}
	}

	return (
		<>
			<ButtonGlobalStyle />
			<ButtonComponent {...rest} isLoading={isLoading} onClick={innerOnClick}>
				{children}
			</ButtonComponent>
		</>
	)
}

Button.defaultProps = {
	size: 'md',
	appearance: 'default',
	disabled: false,
  isLoading: false,
  onClick: undefined
}

Button.propTypes = {
  size: PropTypes.string,
  appearance: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
