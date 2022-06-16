import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { GameSystems } from '../types/data'
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { useAppDispatch } from '../hooks'
import { useNavigate } from 'react-router-dom'
import { setEmptyCharacterSheet } from '../reducers/characterSheetReducer'

export interface CreateCharacterDialogProps {
    open: boolean;
    onClose: () => void;
}

const CreateCharacterDialog = (props: CreateCharacterDialogProps) => {
	const { onClose, open } = props
	const navigation = useNavigate()
	const dispatch = useAppDispatch()
	const [newGameSystem, setNewGameSystem] = React.useState(GameSystems.DND5E)

	const handleClose = () => {
		onClose()
	}

	const handleSelectChange = (event: SelectChangeEvent) => {
		setNewGameSystem(event.target.value as GameSystems)
	}

	const handleCreate = () => {
		dispatch(setEmptyCharacterSheet(newGameSystem))
		handleClose()
		navigation('/editor')
	}

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Which game system do you use?</DialogTitle>
			<Select
				labelId="game-system-select-label"
				id="game-system-select"
				value={newGameSystem}
				onChange={handleSelectChange}>
				{Object.values(GameSystems).map((system) => {
					return <MenuItem key={system} value={system}> {system} </MenuItem>
				})}
			</Select>
			<Button onClick={handleCreate}>
              Create character
			</Button>
		</Dialog>
	)
}

export default CreateCharacterDialog