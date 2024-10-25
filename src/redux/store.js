import { configureStore } from '@reduxjs/toolkit';

// // 1. Оголошуєм початкове значення стану Redux
const initialState = {
  filters: {
    status: 'all',
  },
};

// Відповідає лише за оновлення властивості TASKS
// Значенням параметра state буде об'єкт завдань

// Відповідає лише за оновлення властивості FILTERS
// Значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// Код оголошення редюсерів слайсів
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
