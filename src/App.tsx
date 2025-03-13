import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Buzos from './pages/Buzos';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/buzos">Buzos</Link></li> {/* Aquí está la corrección */}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buzos" element={<Buzos />} />
      </Routes>
    </div>
  );
}

export default App;
