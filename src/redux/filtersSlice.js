import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: {
    status: 'all',
  },
  // Об'єкт case-редюсерів
  reducers: {
    setStatusFilter: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

// Експортуємо фабрики екшенів
export const { setStatusFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
