import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  // Ім'я слайсу
  name: 'tasks',
  // Початковий стан редюсера слайсу
  initialState: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  // Об'єкт case-редюсерів
  reducers: {
    addTask: (state, action) => {},
    deleteTask: (state, action) => {},
    toggleCompleted: (state, action) => {},
  },
});
// Експортуємо фабрики екшенів
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;

// export default function tasksReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'tasks/addTask': {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         items: state.items.filter(task => task.id !== action.payload),
//       };

//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         items: state.items.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     default:
//       return state;
//   }
// }
