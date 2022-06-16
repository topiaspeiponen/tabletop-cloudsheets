import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Toolbar } from '@mui/material'
import CharacterEditor from './components/CharacterEditor'

function App() {
	return (
		<div className="App">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar sx={{ position: 'static' }}>
					<Toolbar>
						<Typography variant="h4">
							<Link to="/">
                Tabletop Cloudsheets
							</Link>
						</Typography>
						<div style={styles.rightActionLinks}>
							<Typography>
								<Link to="/create-character">
                  Create character
								</Link>
							</Typography>
							<Typography>
								<Link to="/about">
                  About
								</Link>
							</Typography>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
			<div className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/editor" element={<CharacterEditor />} />
					<Route path="/create-character" element={<Home />} />
					<Route path="/about" element={<Home />} />
				</Routes>
			</div>
		</div>
	)
}

const styles = {
	rightActionLinks: {
		marginLeft: 'auto',
		display: 'flex',
		flexFlow: 'row nowrap',
		gap: '8px'
	}
}

export default App
