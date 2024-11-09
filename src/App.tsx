import React from 'react';
import Navbar from './Component/Navbar';
import MainContent from './Component/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Nav from './Component/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'; 

const App: React.FC = () => {
  return (
    <>
    <Navbar/>
    
    <MainContent/>
    
    </>
  );
};
export default App;
