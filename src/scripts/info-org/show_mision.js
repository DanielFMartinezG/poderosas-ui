const show_mision = () => {
  // Variables 
  const buttonMision = document.getElementById('button-mision');
  const buttonVision = document.getElementById('button-vision');
  const buttonValores = document.getElementById('button-valores');
  const containerMision = document.getElementsByClassName('container-mision')[0];
  const containerVision = document.getElementsByClassName('container-vision')[0];
  const containerValores = document.getElementsByClassName('container-valores')[0];

  buttonVision.classList.remove('activeButton');
  buttonValores.classList.remove('activeButton');
  buttonMision.style.backgroundColor = "#DFA300";
  containerMision.classList.remove('desactive-info-org');
  containerVision.classList.remove('active-info-org');
  containerValores.classList.remove('active-info-org');

}
export default show_mision;

