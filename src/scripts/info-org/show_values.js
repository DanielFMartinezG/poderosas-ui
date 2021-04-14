const show_values = ()=>{
  // Variables 
  const buttonMision = document.getElementById('button-mision');
  const buttonVision = document.getElementById('button-vision');
  const buttonValores = document.getElementById('button-valores');
  const boxImgInicial = document.getElementById('box-img-inicial');
  const containerMision = document.getElementsByClassName('container-mision')[0];
  const containerVision = document.getElementsByClassName('container-vision')[0];
  const containerValores = document.getElementsByClassName('container-valores')[0];
  
  buttonMision.classList.remove('activeButton');
  buttonVision.classList.remove('activeButton');  
  buttonValores.classList.add('activeButton');
  boxImgInicial.classList.add('desactive-info-org');
  containerValores.classList.add('active-info-org');
  containerMision.classList.remove('active-info-org');
  containerVision.classList.remove('active-info-org');
}  
export default show_values;
