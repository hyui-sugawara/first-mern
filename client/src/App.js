import './App.css';
import Home from './pages/Home';
import { useGlobalContext } from './hooks/useGlobalContext';

function App() {
  const { loading } = useGlobalContext();
  return (
    <div className='App'>
      <div>{loading ? 'Loading...' : <Home />}</div>
    </div>
  );
}

export default App;
