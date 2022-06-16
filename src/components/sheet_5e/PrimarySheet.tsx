import { Box, Grid, Paper, TextField } from '@mui/material'
import CheckboxSkillBlock from './CheckboxSkillBlock'
import MainAttributeBlock from './MainAttributeBlock'
import StackedTextFields from './StackedTextFields'
import TextFieldOuterTitle, { Directions } from './TextFieldOuterTitle'


const PrimarySheet = () => {
	return (
		<Paper elevation={2} sx={{ padding: '8px', marginTop: '16px', marginBottom: '16px' }}>
			<Grid sx={{ marginTop: '8px' }} container spacing={2}>
				<Grid sx={{ margin: 'auto' }} item xs={4}>
					<TextField id="character-name" label="Character name" variant="outlined" />
				</Grid>
				<Grid item xs={8}>
					<Box sx={{ display: 'flex', flexFlow: 'row wrap', gap: '8px' }}>
						<TextField id="class-level" label="Class level" variant="outlined" />
						<TextField id="background" label="Background" variant="outlined" />
						<TextField id="player-name" label="Player name" variant="outlined" />
						<TextField id="race" label="Race" variant="outlined" />
						<TextField id="alignment" label="Alignment" variant="outlined" />
						<TextField id="experience-points" label="Experience points" variant="outlined" />
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<Grid container spacing={1}>
								<Grid item xs={4}>
									<Box sx={{ display: 'flex', flexFlow: 'column nowrap', gap: '16px' }}>
										<MainAttributeBlock attributeName="Strength" />
										<MainAttributeBlock attributeName="Dexterity" />
										<MainAttributeBlock attributeName="Constitution" />
										<MainAttributeBlock attributeName="Intelligence" />
										<MainAttributeBlock attributeName="Wisdom" />
										<MainAttributeBlock attributeName="Charisma" />
									</Box>
								</Grid>
								<Grid item xs={8}>
									<TextFieldOuterTitle title="Inspiration" titleDirection={Directions.RIGHT} />
									<TextFieldOuterTitle title="Proficiency Bonus" titleDirection={Directions.RIGHT} />
									<Box>
										<CheckboxSkillBlock skillName="Acrobatics" />
										<CheckboxSkillBlock skillName="Animal Handling" />
										<CheckboxSkillBlock skillName="Arcana" />
										<CheckboxSkillBlock skillName="Athletics" />
										<CheckboxSkillBlock skillName="Deception" />
										<CheckboxSkillBlock skillName="History" />
										<CheckboxSkillBlock skillName="Insight" />
										<CheckboxSkillBlock skillName="Intimidation" />
										<CheckboxSkillBlock skillName="Investigation" />
										<CheckboxSkillBlock skillName="Medicine" />
										<CheckboxSkillBlock skillName="Nature" />
										<CheckboxSkillBlock skillName="Perception" />
										<CheckboxSkillBlock skillName="Performance" />
										<CheckboxSkillBlock skillName="Persuasion" />
										<CheckboxSkillBlock skillName="Religion" />
										<CheckboxSkillBlock skillName="Sleight of Hand" />
										<CheckboxSkillBlock skillName="Stealth" />
										<CheckboxSkillBlock skillName="Survival" />
									</Box>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<Grid container spacing={2}>
								<Grid item xs={4}>
									<TextFieldOuterTitle title="Armor class" titleDirection={Directions.BOTTOM} />
								</Grid>
								<Grid item xs={4}>
									<TextFieldOuterTitle title="Initiative" titleDirection={Directions.BOTTOM} />
								</Grid>
								<Grid item xs={4}>
									<TextFieldOuterTitle title="Speed" titleDirection={Directions.BOTTOM} />
								</Grid>
								<Grid item xs={12}>
									<StackedTextFields topTitle="Hit point maximum" bottomTitle="Current hit points" />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={4}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Personality traits" titleDirection={Directions.BOTTOM} multiline />
								</Grid>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Ideas" titleDirection={Directions.BOTTOM} multiline />
								</Grid>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Bonds" titleDirection={Directions.BOTTOM} multiline />
								</Grid>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Flaws" titleDirection={Directions.BOTTOM} multiline />
								</Grid>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Features & traits" titleDirection={Directions.BOTTOM} multiline textFieldStyle={{ height: '100%' }} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Paper>
	)
}

export default PrimarySheet