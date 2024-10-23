import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import 'modern-normalize';
import './index.css';

// 1. Імпортуємо провайдер
import { Provider } from 'react-redux';
// 2. Імпортуємо створений раніше стор
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
