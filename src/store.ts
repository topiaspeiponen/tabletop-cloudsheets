import { configureStore } from '@reduxjs/toolkit'
import characterSheetReducer from './reducers/characterSheetReducer'

export const store = configureStore({
	reducer: {
		characterSheet: characterSheetReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch