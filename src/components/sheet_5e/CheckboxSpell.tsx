import * as React from 'react'
import { Checkbox, Grid, TextField } from '@mui/material'


const CheckboxSpell = () => {
	return (
		<Grid container spacing={1}>
			<Grid item md={2}>
				<Checkbox />
			</Grid>
			<Grid item md={10}>
				<TextField fullWidth variant='standard' />
			</Grid>
		</Grid>
	)
}

export default CheckboxSpell