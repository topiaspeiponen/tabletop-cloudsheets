import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CharacterSheet, GameSystems } from '../types/data'
import { assertNever } from '../utils/exhaustive_type_checker'
import { v4 as uuidv4 } from 'uuid'

const characterSheetSlice = createSlice({
	name: 'characterSheet',
	initialState: {
		id: uuidv4(),
		character: {
			gameSystem: GameSystems.DND5E,

		}
	},
	reducers: {
		setCharacterSheet(state, action : PayloadAction<CharacterSheet>) {
			state = action.payload
			return state
		}
	}
})

export const { setCharacterSheet } = characterSheetSlice.actions
export default characterSheetSlice.reducer

export const setEmptyCharacterSheet = (gameSystem : GameSystems) : ThunkAction<void, RootState, unknown, AnyAction> => {
	return async dispatch  => {
		switch (gameSystem) {
		case GameSystems.DND5E: {
			const newSheet : CharacterSheet = {
				id: uuidv4(),
				character: {
					gameSystem: GameSystems.DND5E,
				}
			}
			dispatch(setCharacterSheet(newSheet))
			break
		}
		case GameSystems.PF2E: {
			const newSheet : CharacterSheet = {
				id: uuidv4(),
				character: {
					gameSystem: GameSystems.PF2E,

				}
			}
			dispatch(setCharacterSheet(newSheet))
			break
		}
		default:
			assertNever(gameSystem)
		}

	}
}

export const editCharacterSheet = (characterSheet : CharacterSheet) : ThunkAction<void, RootState, unknown, AnyAction> => {
	return async dispatch  => {
		dispatch(setCharacterSheet(characterSheet))
	}
}