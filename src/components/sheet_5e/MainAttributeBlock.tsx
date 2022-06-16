import { Box, TextField, Typography } from '@mui/material'

interface MainAttributeBlockProps {
    attributeName: string;
}

const MainAttributeBlock = (props: MainAttributeBlockProps) => {
	return (
		<Box sx={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
			<Typography>
				{props.attributeName}
			</Typography>
			<TextField sx={{ input: { textAlign: 'center' } }} id={`${props.attributeName.toLowerCase()}-score`} variant="outlined" />
			<TextField sx={{ width: '50%', input: { textAlign: 'center' } }} size="small" id={`${props.attributeName.toLowerCase()}-modifier`} variant="outlined" />
		</Box>
	)
}

export default MainAttributeBlock