import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './character.slice'

// Create Redux store
export const store = configureStore({
  reducer: {
    characterReducer // Add character reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
