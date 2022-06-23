import React from 'react'
import { Tab, Tabs } from '@mui/material'
import PrimarySheet from './PrimarySheet'
import BackgroundSheet from './BackgroundSheet'
import SpellsSheet from './SpellsSheet'


const SheetContainer = () => {
	const [tabSelection, setTabSelection] = React.useState(0)

	const handleTabSelection = (_event: React.SyntheticEvent, newSelection: number) => {
		setTabSelection(newSelection)
	}

	const renderSheet = () => {
		switch (tabSelection) {
		case 0:
			return (
				<PrimarySheet />
			)
		case 1:
			return (
				<BackgroundSheet />
			)
		case 2:
			return (
				<SpellsSheet />
			)
		default:
			return null
		}
	}

	return (
		<div>
			<Tabs value={tabSelection} onChange={handleTabSelection} aria-label="sheet-tabs" variant="fullWidth" >
				<Tab label="Character" />
				<Tab label="Background" />
				<Tab label="Spells" />
			</Tabs>
			{renderSheet()}
		</div>
	)
}

export default SheetContainer