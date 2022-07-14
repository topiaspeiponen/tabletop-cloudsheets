import * as React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'

interface TextFieldRightTitleProps {
    title: string;
    titleDirection: Directions,
    size?: 'normal' | 'large'
    multiline?: boolean,
    textFieldStyle?: React.CSSProperties,
	fillHeight?: boolean
}

export enum Directions {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left'
}

const TextFieldOuterTitle = (props : TextFieldRightTitleProps) => {
	switch (props.titleDirection) {
	case 'top':
		return (
			<Box sx={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
				<Typography>
					{props.title}
				</Typography>
				<TextField sx={{ ...props.textFieldStyle, width: '100%', input: { textAlign: 'center' } }} id={`${props.title.toLowerCase()}-field`} variant="outlined" multiline={props.multiline}/>
			</Box>
		)
	case 'right':
		return (
			<Grid container spacing={2}>
				<Grid item xs={2}>
					<TextField sx={{ ...props.textFieldStyle, input: { textAlign: 'center' } }} size={'small'} id={`${props.title.toLowerCase()}-field`} variant="outlined" multiline={props.multiline} />
				</Grid>
				<Grid item xs={10}>
					<Typography>
						{props.title}
					</Typography>
				</Grid>
			</Grid>
		)
	case 'left':
		return (
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography>
						{props.title}
					</Typography>
				</Grid>
				<Grid item xs={2}>
					<TextField sx={{ ...props.textFieldStyle, input: { textAlign: 'center' } }} size={'small'} id={`${props.title.toLowerCase()}-field`} variant="outlined" multiline={props.multiline} />
				</Grid>
			</Grid>
		)
	case 'bottom':
		return (
			<Box sx={props.fillHeight ? { display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', height: '100%' } : { display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
				<TextField sx={ props.fillHeight ? { ...props.textFieldStyle, width: '100%', height: '100%', input: { textAlign: 'center' }, div: { height: '100%' } } : { ...props.textFieldStyle, width: '100%', input: { textAlign: 'center' } }} id={`${props.title.toLowerCase()}-field`} variant="outlined" multiline={props.multiline} />
				<Typography>
					{props.title}
				</Typography>
			</Box>
		)
	default:
		return null
	}
}

export default TextFieldOuterTitle