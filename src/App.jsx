import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import CoursesSection from './components/CoursesSection';
import Differentials from './components/Differentials';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <CoursesSection />
        <Differentials />
        <OfferSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
