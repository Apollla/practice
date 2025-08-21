import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';

      if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
})

export const { toggleTheme } = themeSlice.actions