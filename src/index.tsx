import React, { FC, FormEvent, useState } from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import Button from './lib'
import { IAppearance, IThemeMode } from '@redwallsolutions/common-interfaces-ts'

const theming = createThemeWithAppearance()

const Reset = createGlobalStyle<any>`
    body {
		font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${props => theming(props).contrast};
        color: ${props => theming(props).color};
        &, * {
            box-sizing: border-box;
            transition: .3s;
        }
    }
`

Reset.defaultProps = {
	appearance: 'default'
} as any

const Container = styled.div`
	height: 100vw;
	padding: 10px;
	margin: 0;
`

const InputsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`

const InputItem = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2em;
`

const App: FC = () => {
	const [themeMode, setThemeMode] = useState('light')
	const [appearance, setAppearance] = useState('default')
	const [isLoading, setIsLoading] = useState(false)

	const onChange = (event: FormEvent) => {
		let currentTarget = event.currentTarget
		let inputName = currentTarget.attributes.getNamedItem('name').nodeValue
		if (inputName === 'mode') {
			setThemeMode(currentTarget.id)
		} else if (inputName === 'loading') {
			setIsLoading(!isLoading)
		} else {
			setAppearance(currentTarget.id)
		}
	}

	return (
		<ThemeProvider theme={{ mode: themeMode }}>
			<Container>
				<Reset appearance={appearance} />
				<InputsContainer>
					<InputItem>
						<label htmlFor="light">Mode Light</label>
						<input type="radio" id="light" onChange={onChange} name="mode" />
					</InputItem>
					<InputItem>
						<label htmlFor="dark">Mode Dark</label>
						<input type="radio" id="dark" onChange={onChange} name="mode" />
					</InputItem>
					<InputItem>
						<label htmlFor="default">Appearance Default</label>
						<input
							type="radio"
							id="default"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
					<InputItem>
						<label htmlFor="primary">Appearance Primary</label>
						<input
							type="radio"
							id="primary"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
					<InputItem>
						<label htmlFor="secondary">Appearance Secondary</label>
						<input
							type="radio"
							id="secondary"
							onChange={onChange}
							name="appearance"
						/>
					</InputItem>
					<InputItem>
						<label htmlFor="loading">Loading State</label>
						<input
							type="checkbox"
							id="loading"
							onChange={onChange}
							name="loading"
							checked={isLoading}
						/>
					</InputItem>
				</InputsContainer>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: '10em'
					}}
				>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Button
							appearance={appearance as IAppearance}
							isLoading={isLoading}
						>
							Something
						</Button>
						<Button appearance="primary" isLoading={isLoading}>
							Always Primary
						</Button>
						<Button appearance="secondary" isLoading={isLoading}>
							Always Secondary
						</Button>
						<ThemeProvider
							theme={{ mode: themeMode as IThemeMode, primary: 'purple' }}
						>
							<Button
								appearance={appearance as IAppearance}
								isLoading={isLoading}
							>
								Custom Primary Color
							</Button>
						</ThemeProvider>
						<Button variant="text">Text</Button>
						<Button variant="text" appearance="primary">
							Primary Text
						</Button>
					</div>
				</div>
				<Button variant="text" shouldFitContainer>
					I'm a block
				</Button>
				<Button appearance="secondary" shouldFitContainer>
					I'm a colorful block
				</Button>
			</Container>
		</ThemeProvider>
	)
}

render(<App />, document.querySelector('#app'))
