import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Clients from './components/Clients';
import AssideMenu from './components/AssideMenu';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'x-api-key': process.env.REACT_APP_APIKEY
        }
      });
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AssideMenu />
      <Footer />
    </div>
  );
}

export default App;
