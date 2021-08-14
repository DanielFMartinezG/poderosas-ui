import React from 'react';
import '../../styles/footer.css';
const Footer = ()=>{
  return(
    <footer>
      {/* <a href="#" className='footer-text'>Terminos y condiciones</a> */}
      <a href="#"  className='footer-text'>Poderosas Colombia</a>

      <nav>
        <ul>
          <li><a href="#" target="_blank"><i className="fab fa-whatsapp"></i></a></li>
          <li><a href="https://www.facebook.com/Poderosas-Colombia-108022071344536/?ref=page_internal" target="_blank"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/poderosascolombia/" target="_blank"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/in/mariana-sanz-de-santamar%C3%ADa-franco-72849b19a/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;