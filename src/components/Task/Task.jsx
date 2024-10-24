import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
// 1. Імпортуємо хук
import { useDispatch } from 'react-redux';
// 2. Імпортуємо фабрику екшену
import { deleteTask } from '../../redux/actions';

const Task = ({ task }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення завдання
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.checkbox}
        type="checkbox"
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
