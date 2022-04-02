// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useGlobalContext } from './hooks/useGlobalContext';

function App() {
  const { loading } = useGlobalContext();
  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
