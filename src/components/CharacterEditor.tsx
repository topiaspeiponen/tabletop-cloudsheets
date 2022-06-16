import { Container } from '@mui/material'
import { useEffect } from 'react'
import { useAppSelector } from '../hooks'
import { GameSystems } from '../types/data'
import { assertNever } from '../utils/exhaustive_type_checker'
import { loadPdf } from '../utils/pdf_helpers'
import SheetContainer from './sheet_5e/SheetContainer'


const CharacterEditor = () => {
	const characterSheet = useAppSelector(state => state.characterSheet)

	useEffect(() => {
		let fileName = ''
		switch (characterSheet.character.gameSystem) {
		case GameSystems.DND5E:
			fileName = '5e.pdf'
			break
		case GameSystems.PF2E:
			fileName = 'pf2e.pdf'
			break
		default:
			fileName = '5e.pdf'
			assertNever(characterSheet.character.gameSystem)
		}
		loadPdf(fileName).then(pdfInfo => {
			console.log('PDF info ', pdfInfo)
		})
	}, [])

	switch (characterSheet.character.gameSystem) {
	case GameSystems.DND5E: {
		return (
			<Container maxWidth="lg">
				<SheetContainer />
			</Container>
		)
	}
	case GameSystems.PF2E: {
		return (
			<div>PF 2 e</div>
		)
	}
	default:
		assertNever(characterSheet.character.gameSystem)
		return null
	}
}

export default CharacterEditor