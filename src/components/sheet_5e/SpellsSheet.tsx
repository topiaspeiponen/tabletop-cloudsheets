import * as React from 'react'
import { Grid, Paper, TextField, Typography } from '@mui/material'
import CheckboxSpell from './CheckboxSpell'
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
								{[...Array(maxCantrips)].map((_, index) => <CheckboxSpell key={`cantrip-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
                                        1
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
                                        Spells
									</Typography>
								</Grid>
								{[...Array(maxFirstLevel)].map((_, index) => <CheckboxSpell key={`first-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
                                        2
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
                                        Spells
									</Typography>
								</Grid>
								{[...Array(maxSecondLevel)].map((_, index) => <CheckboxSpell key={`second-${index.toString()}`} />)}
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<Grid container spacing={1}>
								<Grid item xs={2}>
									<Typography>
											3
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxThirdLevel)].map((_, index) => <CheckboxSpell key={`third-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
											4
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxFourthLevel)].map((_, index) => <CheckboxSpell key={`fourth-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
											5
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxFifthLevel)].map((_, index) => <CheckboxSpell key={`fifth-${index.toString()}`} />)}
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<Grid container spacing={1}>
								<Grid item xs={2}>
									<Typography>
											6
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxSixthLevel)].map((_, index) => <CheckboxSpell key={`sixth-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
											7
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxSeventhLevel)].map((_, index) => <CheckboxSpell key={`seventh-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
											8
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxEigthLevel)].map((_, index) => <CheckboxSpell key={`eight-${index.toString()}`} />)}
								<Grid item xs={2}>
									<Typography>
											9
									</Typography>
								</Grid>
								<Grid item xs={10}>
									<Typography>
												Spells
									</Typography>
								</Grid>
								{[...Array(maxNinthLevel)].map((_, index) => <CheckboxSpell key={`ninth-${index.toString()}`} />)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default SpellsSheet