import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import { Provider } from 'react-redux'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline>
						<App />
					</CssBaseline>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)