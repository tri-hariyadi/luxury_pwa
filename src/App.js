import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AssideMenu from './components/AssideMenu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AssideMenu />
      <Footer />
    </div>
  );
}

export default App;
