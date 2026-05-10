import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import NeuralBackground from './components/NeuralBackground';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Equipo from './pages/Equipo';
import Partners from './pages/Partners';
import Soluciones from './pages/Soluciones';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NeuralBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
