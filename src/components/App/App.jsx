import AppBar from '../AppBar/AppBar';
import Layout from '../Layout/Layout';
import TaskForm from '../TaskForm/TaskForm';
import './App.module.css';

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
    </Layout>
  );
};

export default App;
