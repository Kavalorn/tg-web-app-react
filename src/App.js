import { useEffect } from 'react';
import './App.css';
import {Button} from './components/Button/Button';
import { useTelegram } from './hooks/useTelegram';
import {Header} from './components/Header/Header';

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      test
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
