import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: string[];
  searchFilter: string;
}

const initialState: CounterState = {
  value: [],
  searchFilter: '',
};

export const emojiSlice = createSlice({
  name: 'emojis',
  initialState,
  reducers: {
    addEmoji: (state, action: PayloadAction<string>) => {
      state.value = [...state.value, action.payload];
    },
    onSearch: (state, action: PayloadAction<string>) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { addEmoji, onSearch } = emojiSlice.actions;

export default emojiSlice.reducer;
