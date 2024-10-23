import { configureStore } from '@reduxjs/toolkit';

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  tasks: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    status: 'all',
  },
};

// 2. Передаємо початкове значення стану Redux
const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
