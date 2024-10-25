// 1. Імпортуємо функцію createAction
import { createAction } from '@reduxjs/toolkit';

// 2. Створюємо фабрики екшенів

export const setStatusFilter = createAction('filters/setStatusFilter');
