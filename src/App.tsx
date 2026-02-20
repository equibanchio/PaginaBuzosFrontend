import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Buzos from './pages/Buzos';
import LookDetail from './pages/LookDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BenefitsPage from './pages/BenefitsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buzos" element={<Buzos />} />
        <Route path="/look/:id" element={<LookDetail />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/beneficios" element={<BenefitsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App
