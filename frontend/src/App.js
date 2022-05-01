import React from 'react';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import AddAlbum from './Components/AddAlbum';
import UpdateAlbum from './Components/UpdateAlbum';
import MyPortfolio from './Components/MyPortfolio';
import MyWeddingAlbum from './Components/MyWeddingAlbum';
import Pdf from './Components/Pdf';
import WeddingAlbum from './Components/WeddingAlbum';
import EventCard from './Components/EventCard';


function App() {
  return (
    <div className="App">
      <Header />
      <AddAlbum />
    {/* <UpdateAlbum /> */}
      {/* <MyPortfolio /> */}
      {/* <MyWeddingAlbum /> */}
     {/* <Pdf/> */}
      {/* <WeddingAlbum />  */}
      {/* <EventCard /> */}
      <Footer />
    </div>
  );
}

export default App;
