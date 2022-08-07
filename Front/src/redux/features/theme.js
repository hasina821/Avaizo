import { createSlice } from '@reduxjs/toolkit'
 
const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state) => {
            return state === 'light' ? 'dark' : 'light'
        },
    },
})
export const {toggle} =themeSlice.actions
export default themeSlice;