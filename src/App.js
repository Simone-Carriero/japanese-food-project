import React from 'react';

import { Routes, Route } from 'react-router-dom'


import BasicLayout from './routes/basic-layout/basic-layout.component';
import Homepage from './routes/homepage/homepage.component';
import Menu from './routes/menu/menu.component';
import About from './routes/about/about.component';
import Contact from './routes/contact/contact.component';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BasicLayout />}>
          <Route index element={<Homepage />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
