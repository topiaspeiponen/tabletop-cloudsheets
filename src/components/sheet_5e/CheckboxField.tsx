import * as React from 'react'
import { Checkbox, Grid, TextField } from '@mui/material'

interface CheckboxFieldProps {
    id: string;
}

const CheckboxField = (props: CheckboxFieldProps) => {
	return (
		<Grid container sx={{ alignItems: 'center' }} spacing={1}>
			<Grid item xs={2}>
				<Checkbox id={`${props.id}-checkbox`} />
			</Grid>
			<Grid item xs={10}>
				<TextField sx={{ input: { textAlign: 'center' } }} size={'small'} id={`${props.id}-field`} variant="standard" />
			</Grid>
		</Grid>
	)
}

export default CheckboxField