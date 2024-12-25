import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    transmission: 'manual',
    engine: '',
    AC: '',
    bathroom: '',
    kitchen: '',
    TV: '',
    form: '',
    favorite: [],
    currentTruck: {},
    reviewsLength: 0,
    filter: '',
  },
  reducers: {
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    setEngine(state, action) {
      state.engine = action.payload;
    },
    setAC(state, action) {
      state.AC = action.payload;
    },
    setBathroom(state, action) {
      state.bathroom = action.payload;
    },
    setKitchen(state, action) {
      state.kitchen = action.payload;
    },
    setTV(state, action) {
      state.TV = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setFavorite(state, action) {
      state.favorite.push(action.payload);
    },
    setCurrentTruck(state, action) {
      state.currentTruck = action.payload;
    },
    setReviewsLength(state, action) {
      state.reviewsLength = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  setTransmission,
  setEngine,
  setAC,
  setBathroom,
  setKitchen,
  setTV,
  setForm,
  setFavorite,
  setCurrentTruck,
  setReviewsLength,
  setFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
