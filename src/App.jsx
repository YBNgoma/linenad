import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ProductDetail from './pages/ProductDetail';
import AgentDashboard from './pages/AgentDashboard';

function App() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <div className="min-h-screen bg-cream dark:bg-midnight transition-colors duration-300">
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<AgentDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
