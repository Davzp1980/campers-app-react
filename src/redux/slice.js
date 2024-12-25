import { createSlice } from '@reduxjs/toolkit';
import { fetchTrucks } from './operations';

const trucksSlice = createSlice({
  name: 'trucks',
  initialState: {
    items: {
      items: [],
      total: 0,
    },
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.error = null;
        state.items.items = action.payload.items;
        state.items.total = action.payload.total;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const trucksReducer = trucksSlice.reducer;
