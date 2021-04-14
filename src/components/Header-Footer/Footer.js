import React from 'react';
import '../../styles/footer.css';
const Footer = ()=>{
  return(
    <footer>
      <a href="#">Terminos y condiciones</a>
      <nav>
        <ul>
          <li><a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
          <li><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;