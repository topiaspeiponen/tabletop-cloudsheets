import * as React from 'react'
import { Grid, Paper, TextField } from '@mui/material'
import TextFieldOuterTitle, { Directions } from './TextFieldOuterTitle'


const BackgroundSheet = () => {
	return (
		<Paper elevation={2} sx={{ padding: '8px', marginTop: '16px', marginBottom: '16px' }}>
			<Grid sx={{ marginTop: '8px' }} container spacing={2}>
				<Grid sx={{ margin: 'auto' }} item xs={4}>
					<TextField id="character-name" label="Character name" variant="outlined" />
				</Grid>
				<Grid item xs={8}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<TextField id="age" label="Age" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="height" label="Height" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="weight" label="Weight" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="eyes" label="Eyes" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="skin" label="Skin" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="hair" label="Hair" variant="outlined" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={4}>
							<TextFieldOuterTitle title="Character appearance" titleDirection={Directions.BOTTOM} />
							<TextFieldOuterTitle title="Character backstory" titleDirection={Directions.BOTTOM} />
						</Grid>
						<Grid item xs={8}>
							<Grid container spacing={1}>
								<Grid item xs={6}>
									<TextFieldOuterTitle title="Allies & organizations" titleDirection={Directions.BOTTOM} />
								</Grid>
								<Grid item xs={6}>
									<TextFieldOuterTitle title="Faction" titleDirection={Directions.BOTTOM} />
								</Grid>
							</Grid>
							<TextFieldOuterTitle title="Additional features & traits" titleDirection={Directions.BOTTOM} />
							<TextFieldOuterTitle title="Treasure" titleDirection={Directions.BOTTOM} />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default BackgroundSheet