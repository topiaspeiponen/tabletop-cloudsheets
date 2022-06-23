import * as React from 'react'
import { Box, Checkbox, Grid, Paper, TextField, Typography } from '@mui/material'
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
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<TextField id="class-level" label="Class level" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="background" label="Background" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="player-name" label="Player name" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="race" label="Race" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="alignment" label="Alignment" variant="outlined" />
						</Grid>
						<Grid item xs={4}>
							<TextField id="experience-points" label="Experience points" variant="outlined" />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={4} sx={{ height: '100%' }}>
						<Grid item md={4} xs={12} sx={{ height: '100%' }}>
							<Grid container spacing={1} sx={{ height: '100%' }}>
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
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Passive wisdom (perception)" titleDirection={Directions.RIGHT} />
								</Grid>
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Other proficiencies & languages" titleDirection={Directions.BOTTOM} multiline fillHeight />
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4} xs={12} sx={{ height: '100%' }}>
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
								<Grid item xs={12}>
									<TextFieldOuterTitle title="Temporary Hit Points" titleDirection={Directions.BOTTOM} />
								</Grid>
								<Grid item xs={6}>
									<StackedTextFields topTitle="Total" bottomTitle="Hit dice" />
								</Grid>
								<Grid item xs={6}>
									<Grid container spacing={1}>
										<Grid item xs={12}>
											<Grid container sx={{ alignItems: 'center' }}>
												<Grid item xs={6}>
													<Typography>
														Successes
													</Typography>
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Grid container sx={{ alignItems: 'center' }}>
												<Grid item xs={6}>
													<Typography>
														Failures
													</Typography>
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
												<Grid item xs={2}>
													<Checkbox />
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Box>
									<Grid container spacing={1}>
										<Grid item xs={5}>
											<Grid container>
												<Grid item xs={12}>
													<Typography variant='body2'>
														Name
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={2}>
											<Grid container>
												<Grid item xs={12}>
													<Typography variant="body2">
														Atk bonus
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={5}>
											<Grid container>
												<Grid item xs={12}>
													<Typography variant="body2">
														Damage/type
													</Typography>
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
												<Grid item xs={12}>
													<TextField />
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<TextFieldOuterTitle title="Attacks & spellcasting" titleDirection={Directions.BOTTOM} multiline />
										</Grid>
										<Grid item xs={12}>
											<Grid container spacing={1}>
												<Grid item xs={3}>
													<Grid container>
														<Grid item xs={12}>
															<Grid container>
																<Grid item xs={4}>
																	<Typography>
																		CP
																	</Typography>
																</Grid>
																<Grid item xs={8}>
																	<TextField />
																</Grid>
															</Grid>
														</Grid>
														<Grid item xs={12}>
															<Grid container>
																<Grid item xs={4}>
																	<Typography>
																		SP
																	</Typography>
																</Grid>
																<Grid item xs={8}>
																	<TextField />
																</Grid>
															</Grid>
														</Grid>
														<Grid item xs={12}>
															<Grid container>
																<Grid item xs={4}>
																	<Typography>
																		GP
																	</Typography>
																</Grid>
																<Grid item xs={8}>
																	<TextField />
																</Grid>
															</Grid>
														</Grid>
														<Grid item xs={12}>
															<Grid container>
																<Grid item xs={4}>
																	<Typography>
																		EP
																	</Typography>
																</Grid>
																<Grid item xs={8}>
																	<TextField />
																</Grid>
															</Grid>
														</Grid>
														<Grid item xs={12}>
															<Grid container>
																<Grid item xs={4}>
																	<Typography>
																		PP
																	</Typography>
																</Grid>
																<Grid item xs={8}>
																	<TextField />
																</Grid>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
												<Grid item xs={9}>
													<TextFieldOuterTitle title="Equipment" titleDirection={Directions.BOTTOM} multiline fillHeight />
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
						<Grid item md={4} xs={12}>
							<Grid container spacing={2} sx={{ height: '100%', alignContent: 'flex-start' }}>
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
									<TextFieldOuterTitle title="Features & traits" titleDirection={Directions.BOTTOM} multiline textFieldStyle={{ height: '100%' }} fillHeight />
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