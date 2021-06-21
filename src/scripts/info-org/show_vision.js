const show_vision = ()=>{
  // Variables 
  const buttonMision = document.getElementById('button-mision');
  const buttonVision = document.getElementById('button-vision');
  const buttonValores = document.getElementById('button-valores');
  const containerMision = document.getElementsByClassName('container-mision')[0];
  const containerVision = document.getElementsByClassName('container-vision')[0];
  const containerValores = document.getElementsByClassName('container-valores')[0];
  
  buttonMision.style.backgroundColor = "#FFC72C";
  buttonValores.classList.remove('activeButton');
  buttonVision.classList.add('activeButton');
  containerVision.classList.add('active-info-org');
  containerMision.classList.add('desactive-info-org');
  containerValores.classList.remove('active-info-org');
  buttonVision.classList.add('activeButton')


}  
export default show_vision;
