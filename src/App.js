import './App.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/'  element={<Home />} />
        <Route  path='/cart'  element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
