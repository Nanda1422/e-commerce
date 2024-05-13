
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenFashion from './components/MenFashion';
import WomenFashion from './components/WomenFashion';
import Electronics from './components/Electronics';
import Beauty from './components/Beauty';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MenFashion" element={<MenFashion />} />
          <Route path="/WomenFashion" element={<WomenFashion />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
