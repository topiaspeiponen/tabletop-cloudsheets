import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: 'Source Sans Pro',
		h1: {
			fontSize: '5rem'
		}
	},
	spacing: 4
})

export default theme