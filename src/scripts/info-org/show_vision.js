const show_vision = ()=>{
  // Variables 
  const buttonMision = document.getElementById('button-mision');
  const buttonVision = document.getElementById('button-vision');
  const buttonValores = document.getElementById('button-valores');
  const boxImgInicial = document.getElementById('box-img-inicial');
  const containerMision = document.getElementsByClassName('container-mision')[0];
  const containerVision = document.getElementsByClassName('container-vision')[0];
  const containerValores = document.getElementsByClassName('container-valores')[0];
  
  // Evento para activar la informacion por medio el click
  buttonMision.classList.remove('activeButton');
  buttonValores.classList.remove('activeButton');
  buttonVision.classList.add('activeButton');
  boxImgInicial.classList.add('desactive-info-org');
  containerVision.classList.add('active-info-org');
  containerMision.classList.remove('active-info-org');
  containerValores.classList.remove('active-info-org');
  buttonVision.classList.add('activeButton');

}  
export default show_vision;
