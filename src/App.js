import logo from './logo.svg';
import './App.css';
import imagem from './components/img/img1.jpg'
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Contato from './components/Pages/Contato';
import Servicos from './components/Pages/Servicos';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import {FaArchway, FaBattleNet, FaContao,FaHammer }from "react-icons/fa";
import Rodape from './components/Pages/Rodape'; 
function App() {
  
  return (
    <div>
       <img className="img-center" src={imagem} alt="logo"></img>
     <h1>Menu</h1>
    

     <BrowserRouter>
    <nav className="menu">
     <ul>
      <li><Link to="/"><FaArchway/>Home</Link></li>
      <li><Link to ="/Contato"><FaContao/>Contato</Link></li>
      <li><Link to ="/Sobre">< FaBattleNet/>Sobre</Link></li>
      <li><Link to ="/Servicos"><FaHammer/>Serviços</Link></li>
     </ul>
     
     </nav>
     
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Contato" element={<Contato />} />
  <Route path="/Sobre" element={<Sobre />} />
  <Route path="/Servicos" element={<Servicos />} />
  </Routes>

     
     
     
     
     
     
     
     
     
     
     
        
     </BrowserRouter>
     <Rodape/>
    </div>

  );
}
export default App;
