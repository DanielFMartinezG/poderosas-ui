import React from 'react';
import '../../styles/header.css';
import logo from '../../assets/img-logos/Logo Poderosas Nuevo-FONDO ROSA.png'
import {Link} from 'react-router-dom'
const Header = ()=>{
  return(
    <header>
      <img src={logo} alt="Logo" className="logo"/>
      <nav>
        <a href="#" className="btn btn-2">DONACIONES</a>
        <div className="menu">
          <input type="checkbox" id="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul>
            <li><Link to='/poderosas/home'>INICIO</Link></li>
            <hr color="#FFFFFF" />
            <li><a href="#">EDUCACIÓN</a></li>
            <hr color="#FFFFFF" />
            <li><Link to='/poderosas/about-us'>ACERCA DE PODEROSAS</Link></li>
            <hr color="#FFFFFF" />
            <li><a href="#">CATÁLOGO DE VENTAS</a></li>
            <hr color="#FFFFFF" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;