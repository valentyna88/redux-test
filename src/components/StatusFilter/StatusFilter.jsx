import Button from '../Button/Button';
import css from './StatusFilter.module.css';
// 1. Імпортуємо хук
import { useSelector } from 'react-redux';

const StatusFilter = () => {
  // 2. Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === 'all'}>All</Button>
      <Button selected={filter === 'active'}>Active</Button>
      <Button selected={filter === 'completed'}>Completed</Button>
    </div>
  );
};

export default StatusFilter;
