import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import CoursesSection from './components/CoursesSection';
import Differentials from './components/Differentials';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import { Routes, Route } from 'react-router-dom';


const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ProblemSection />
      <CoursesSection />
      <Differentials />
      <OfferSection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-blue selection:text-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
