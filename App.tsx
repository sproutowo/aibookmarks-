import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-google-text selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;