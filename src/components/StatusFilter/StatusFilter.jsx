import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { setStatusFilter } from '../../redux/filtersSlice';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
  //  Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // //  Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);
  //  Викликаємо фабрику екшену та передаємо значення фільтра
  //  Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
