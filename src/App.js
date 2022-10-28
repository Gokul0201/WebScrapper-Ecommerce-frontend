import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/Components/Dashboard/Dashboard'
import Login from '../src/Components/Login/Login'
import Register from '../src/Components/Register/Register'
import Card from './Components/Card/Card';
import LoadPage from './Components/LoadPage/LoadPage';
import Cards from './Components/Card/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allproducts" element={<Dashboard />} />
          <Route path="/card" element={<Cards/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
