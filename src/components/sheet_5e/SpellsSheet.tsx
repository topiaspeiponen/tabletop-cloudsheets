import { Grid, Paper, TextField, Typography } from '@mui/material'
import TextFieldOuterTitle, { Directions } from './TextFieldOuterTitle'


const SpellsSheet = () => {
	const maxCantrips = 8
	const maxFirstLevel = 12
	const maxSecondLevel = 13
	const maxThirdLevel = 13
	const maxFourthLevel = 13
	const maxFifthLevel = 9
	const maxSixthLevel = 9
	const maxSeventhLevel = 9
	const maxEigthLevel = 7
	const maxNinthLevel = 7

	return (
		<Paper elevation={2} sx={{ padding: '8px', marginTop: '16px', marginBottom: '16px' }}>
			<Grid sx={{ marginTop: '8px' }} container spacing={2}>
				<Grid sx={{ margin: 'auto' }} item xs={4}>
					<TextField id="spell-casting-class" label="Spell casting class" variant="outlined" />
				</Grid>
				<Grid item xs={8}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<TextFieldOuterTitle title="Spellcasting ability" titleDirection={Directions.BOTTOM} />
						</Grid>
						<Grid item xs={4}>
							<TextFieldOuterTitle title="Spell save DC" titleDirection={Directions.BOTTOM} />
						</Grid>
						<Grid item xs={4}>
							<TextFieldOuterTitle title="Spell attack bonus" titleDirection={Directions.BOTTOM} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<Grid container spacing={1}>
								<Grid item xs={2}>
									<Typography>
                                        0
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
                                        Cantrips
									</Typography>
								</Grid>
								{}
							</Grid>
						</Grid>
						<Grid item xs={4}>

						</Grid>
						<Grid item xs={4}>

						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default SpellsSheet