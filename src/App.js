import { useEffect } from 'react';
import './App.css';
import {Button} from './components/Button/Button'

function App() {

  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      test
      <Button onClick={onClose}>Закрыть</Button>
    </div>
  );
}

export default App;
