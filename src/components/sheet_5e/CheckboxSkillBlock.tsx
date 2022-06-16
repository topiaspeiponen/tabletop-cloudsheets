import { Checkbox, Grid, TextField, Typography } from '@mui/material'

interface CheckboxSkillBlock {
    skillName: string;
}

const CheckboxSkillBlock = (props : CheckboxSkillBlock) => {
	return (
		<Grid container sx={{ alignItems: 'center' }} spacing={1}>
			<Grid item xs={2}>
				<Checkbox id={`${props.skillName.toLowerCase()}-proficiency`} />
			</Grid>
			<Grid item xs={4}>
				<TextField sx={{ input: { textAlign: 'center' } }} size={'small'} id={`${props.skillName.toLowerCase()}-skill`} variant="standard" />
			</Grid>
			<Grid item xs={6}>
				<Typography>
					{props.skillName}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default CheckboxSkillBlock