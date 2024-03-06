
import React, { useState }              from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import products      from './data/products.js'


import Nav           from './components/Nav';
import HomePage      from './pages/HomePage';
import GalleryPage   from './pages/GalleryPage.js'
import StaffPage     from './pages/StaffPage.js'
import OrderPage     from './pages/OrderPage.js'
import TopicsPage    from './pages/TopicsPage.js'

import AddAlbumPage  from './pages/AddAlbumPage.js'
import AlbumLogPage  from './pages/AlbumLogPage.js'
import EditAlbumPage from './pages/EditAlbumPage.js'


           

import './App.css';

function App() {
  const [album, setAlbum] = useState([])
  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Daniel Dalinda
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/"            element={<HomePage />} />
                <Route path="/gallery"     element={<GalleryPage />} /> 
                <Route path="/staff"       element={<StaffPage />} />
                <Route path="/topics"      element={<TopicsPage />} />
                <Route path="/order"       element={<OrderPage products = {products}/>} /> 

                <Route path="/log"         element={<AlbumLogPage setAlbum={setAlbum}/>} /> 
                <Route path="/add-album"   element={<AddAlbumPage />} />
                <Route path="/edit-album"  element={<EditAlbumPage albumToEdit ={album}/>} />   


            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023, Daniel Dalinda</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
