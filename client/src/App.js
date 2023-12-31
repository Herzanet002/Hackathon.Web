import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Program from './pages/Program';

//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/program' element={<Program />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;