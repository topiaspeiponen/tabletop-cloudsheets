import React from 'react'
import { Box, Button, Card, CardContent, Fade, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import CreateCharacterDialog from './CreateCharacterDialog'

const HomeBanner = () => {
	const [characterDialogOpen, setCharacterDialogOpen] = React.useState(false)

	const handleCharacterDialogOpen = () => {
		setCharacterDialogOpen(true)
	}

	const handleCharacterDialogClose = () => {
		setCharacterDialogOpen(false)
	}

	return (
		<Container maxWidth="xl">
			<Fade in={true} timeout={2000}>
				<div>
					<Typography align="center" variant="h1">
                        Access your character sheets in the cloud
					</Typography>
					<Fade in={true} timeout={2000}>
						<Typography align="center" variant="h4">
                            A hub for storing and editing your RPG character sheets in a PDF-esque format!
						</Typography>
					</Fade>
					<Fade in={true} timeout={2000}>
						<div style={styles.getStartedContainer}>
							<Typography align="center" variant="h5">
                                Get started now!
							</Typography>
							<Container sx={{
								display: 'flex',
								flexFlow: 'row nowrap',
								paddingTop: '16px',
								gap: '16px'
							}}>
								<Card variant="outlined" sx={{ width: '50%', display: 'flex', flexFlow: 'column nowrap' }}>
									<CardContent sx={{ display: 'flex', flexFlow: 'column nowrap', height: '100%', gap: '16px' }}>
										<Typography align="center" variant="subtitle1">
                                            Start off by creating a completely new character!
										</Typography>
										<Button onClick={handleCharacterDialogOpen} variant="contained" size="medium">
                                            Create character
										</Button>
									</CardContent>
								</Card>
								<Card variant="outlined" sx={{ width: '50%', display: 'flex', flexFlow: 'column nowrap' }}>
									<CardContent sx={{ display: 'flex', flexFlow: 'column nowrap', height: '100%', gap: '16px' }}>
										<Typography align="center" variant="subtitle1">
                                            Already have a character on a PDF sheet?
										</Typography>
										<Button variant="contained">
                                            Import character (W.I.P)
										</Button>
									</CardContent>
								</Card>
							</Container>
						</div>
					</Fade>
					<Fade in={true} timeout={3000}>
						<div style={styles.supportedSystemsContainer}>
							<Typography align="center" variant="h5">
                                Tabletop Cloudsheets supports the following fillable PDF sheets
							</Typography>
							<Container sx={{
								display: 'flex',
								flexFlow: 'row nowrap',
								paddingTop: '16px',
								gap: '16px'
							}}>
								<Card variant="outlined" sx={{ width: '50%', display: 'flex', flexFlow: 'column nowrap' }}>
									<CardContent sx={{ display: 'flex', flexFlow: 'column nowrap', height: '100%' }}>
										<Typography align="center" variant="subtitle1">
                                            Pathfinder 2nd edition
										</Typography>
										<Box component="img" sx={{ width: '50%', height: 'auto', margin: 'auto' }} src="https://assets-us-01.kc-usercontent.com/d960ad1b-9967-00f9-1158-72274b18312d/8c2db6cf-fa52-4636-baec-0a64af9551e7/PF2Logo1600.png" />
									</CardContent>
								</Card>
								<Card variant="outlined" sx={{ width: '50%', display: 'flex', flexFlow: 'column nowrap' }}>
									<CardContent sx={{ display: 'flex', flexFlow: 'column nowrap', height: '100%' }}>
										<Typography align="center" variant="subtitle1">
                                            D&D 5th edition
										</Typography>
										<Box component="img" sx={{ width: '50%', height: 'auto', margin: 'auto' }} src="https://i.pinimg.com/originals/c7/c3/a0/c7c3a029d172b33287003d26a0c693f9.png" />
									</CardContent>
								</Card>
							</Container>
						</div>
					</Fade>
				</div>
			</Fade>
			<CreateCharacterDialog open={characterDialogOpen} onClose={handleCharacterDialogClose} />
		</Container>
	)
}

const styles = {
	supportedSystemsContainer: {
		paddingTop: '64px'
	},
	getStartedContainer: {
		paddingTop: '64px'
	}
}

export default HomeBanner