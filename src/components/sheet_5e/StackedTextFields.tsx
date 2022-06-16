import { Grid, TextField, Typography } from '@mui/material'

interface StackedTextFieldsProps {
    topTitle: string;
    bottomTitle: string;
}

const StackedTextFields = (props : StackedTextFieldsProps) => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<Typography>
					{props.topTitle}
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<TextField sx={{ input: { textAlign: 'center' } }} size={'small'} id={`${props.topTitle.toLowerCase()}-field`} variant="outlined" />
			</Grid>
			<Grid item xs={12}>
				<TextField sx={{ width: '100%', input: { textAlign: 'center' } }} id={`${props.bottomTitle.toLowerCase()}-field`} multiline variant="outlined" />
			</Grid>
			<Grid item xs={12}>
				<Typography align="center">
					{props.bottomTitle}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default StackedTextFields