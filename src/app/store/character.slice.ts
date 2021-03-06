import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICharacter, ICharacterState } from './../utilities/interfaces'

// Initial localstorage
const NAME_LOCALSTORAGE = 'BOOKMARKS'
const localStorageCharacter = localStorage.getItem(NAME_LOCALSTORAGE)
let parsedBookmarks: ICharacter[]

if (!localStorageCharacter) {
  localStorage.setItem(NAME_LOCALSTORAGE, JSON.stringify([]))
  parsedBookmarks = []
} else {
  parsedBookmarks = JSON.parse(localStorageCharacter)
}

// Initial state for Redux store
const initialState: ICharacterState = {
  bookmarks: parsedBookmarks,
  character: {}
}

// Create Redux state slice
const characterSlice = createSlice({
  name: 'characters',
  initialState, // Define initial state
  reducers: {
    // Define reducers
    addBookmark: (state, action: PayloadAction<ICharacter>) => {
      if (!state.bookmarks.find(bookmark => bookmark.id === action.payload.id)) {
        state.bookmarks = [...state.bookmarks, action.payload]

        const stringifiedCharacter = JSON.stringify(state.bookmarks)
        localStorage.setItem(NAME_LOCALSTORAGE, stringifiedCharacter)
      }
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(item => item.id !== action.payload)

      const stringifiedCharacter = JSON.stringify(state.bookmarks)
      localStorage.setItem(NAME_LOCALSTORAGE, stringifiedCharacter)
    },
    addCharacter: (state, action: PayloadAction<ICharacter>) => {
      state.character.id = action.payload.id
      state.character.name = action.payload.name
      state.character.image = action.payload.image
      state.character.species = action.payload.species
    }
  }
})

// Export actions generated by "createSlice()":
export const { addBookmark, removeBookmark, addCharacter } = characterSlice.actions

// Export reducer generated by "createSlice()":
export default characterSlice.reducer
