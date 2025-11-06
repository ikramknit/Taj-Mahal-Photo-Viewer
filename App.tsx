
import React from 'react';
import Header from './components/Header';
import TajMahalImage from './components/TajMahalImage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8 font-serif">
      <main className="flex flex-col items-center justify-center w-full flex-grow">
        <Header />
        <TajMahalImage />
        <Footer />
      </main>
    </div>
  );
};

export default App;
