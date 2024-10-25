import { configureStore } from '@reduxjs/toolkit';

// Код оголошення редюсерів слайсів
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
