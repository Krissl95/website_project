import React from 'react'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  return (
    <div className="Page-container">
        <header className="Navbar-section">
          <Navbar />
        </header>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
