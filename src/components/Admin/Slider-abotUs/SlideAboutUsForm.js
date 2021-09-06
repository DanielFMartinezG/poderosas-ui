import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/admin/formSliderHome.css';
import saveImg from '../../../scripts/admin/save_img_firebase';

const SliderAboutUsForm = () => {

  const path = 'http://64.227.101.60:4000';
  const history = useHistory();
  //utilizamos imgText para mostrar el nombre de la imagen que se está subiendo al formulario 
  const [imgText, setImgText] = useState('sube una imagen');
  const [formUpload, serFormUpload] = useState(true);
  const [dropdownValues, setDropdownValues] = useState([]);
  const imgSlideRef = useRef();
  const dropdownRef = useRef();

  /* función encargada de ejecutar el almacenamiento de la imagen a 
  firebase storage y ejecutar el metodo post para guardar la noticia */
  async function saveFirebaseImg(event) {
    event.preventDefault();
    const file = imgSlideRef.current.files[0];
    if (file !== undefined) {
      alert('Actualización en proceso...');
      saveImg('carrusel-aboutUs-imagenes', file, (value) => {
        console.log(`Img URL: ${value}`);
        //TODO, una vez obtenida la url terminar de envíar el post
        sendPostRequire(value);
      });
    } else {
      alert('Complete el formulario.');
    }
  }

  /**
   * Función encargada de ejecutar el metodo POST para almacenar la imagen
   * @param {*} urlImg url de la imagen almacenada en FirebaseStorage
   */
  async function sendPostRequire(urlImg) {
    try {
      const token = localStorage.getItem('admin');
      //armamos el objetoa enviar con la imagen
      const body = {
        url: urlImg,
      }
      const response = await fetch(`${path}/aboutus/slider/insertImages`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(body)
      })
      const responseJson = await response.json();
      //si la respuesta es Token Expired redireccionamos al usuario nuevamente al login
      if (responseJson.msq === 'Token Expired') {
        alert('Expiró el tiempo de inicio de sesión');
        history.push('./login');
      } else if (responseJson.msq === 'URL insertada con exito') {
        alert('URL insertada con éxito.');
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  /*función encargada de obtener el nombre de la imagen subida e igualmente
  controlar el tamaño de la imagen subida*/
  const changeImgText = (event) => {
    event.preventDefault();
    if (imgSlideRef.current.files.length > 0 &&
      imgSlideRef.current.files[0].size < 2097152) {
      setImgText(imgSlideRef.current.files[0].name);
    }
  }

  const showUploadForm = () => {
    serFormUpload(true);
  }

  const showDeleteForm = () => {
    serFormUpload(false);
  }

  /**
   * función encargada de implementar el metodo DELETE para eliminar una imagen 
   * almacenada en la base de datos
   * @param event objeto tipo evento
   */
  async function sendDeleteRequere(event) {
    event.preventDefault();
    const token = localStorage.getItem('admin');
    let dropdown = dropdownRef.current;
    const response = await fetch(`${path}/aboutus/slider/deleteImages`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${token}`
      },
      method: "DELETE",
      body: JSON.stringify({ id: dropdown.value })
    });
    const responseJson = await response.json();
    if (responseJson.msq === 'Imagen eliminada con exito') {
      alert('Imagen eliminada con éxito.');
      window.location.reload();
    } else if (responseJson.msq === 'Token Expired') {
      alert('Su sesión expiró, inicie sesión nuevamente.');
      history.push('./login');
    } else {
      alert('Tuvimos un problema, intetalo más tarde.');
    }
  }

  //ejecutramos el useEffect una sola vez, al cargar por primera vez el componente
  useEffect(async function () {
    /*obtenemos las imagenes almacenadas actualmente en la base de datos y procedemmos
    a guardarlas en su respectivo estado */
    const response = await fetch(`${path}/aboutus/slider/getImages`);
    const jsonResponse = await response.json();
    const imgs = jsonResponse.resultado;
    setDropdownValues(imgs);
  }, [])

  return (
    <section className='admin-form'>
      <p className='sub-title-admin'>Carrusel-AboutUs</p>
      <div className='form-container'>
        <div className='form-header'>
          <div
            className={formUpload ? 'bttn-header bttn-active' : 'bttn-header'}
            onClick={showUploadForm}
          >
            Subir
          </div>
          <div
            className={!formUpload ? 'bttn-header bttn-active' : 'bttn-header'}
            onClick={showDeleteForm}
          >
            Eliminar
          </div>
        </div>

        <form
          action="#"
          className={formUpload ? "form-admin form-admin-active" : "form-admin"}
          id="form-upload-img"
        >
          <div className='form-item'>
            <label className='label-text'>Imagen</label>
            <span className='updload-img-box'>
              <input
                type="file"
                accept='image/png, .jpeg, .jpg,'
                name="files"
                className='upload-label'
                id='upload-slide-label'
                ref={imgSlideRef}
                onChange={changeImgText} >
              </input>
              <label
                htmlFor='upload-slide-label'
                className='button-template-admin upload-img-bttn'
              >
                Subir Img
              </label>
              <p className='upload-img-name' id="file-chosen">{imgText}</p>
            </span>
          </div>
          {/* <div className='form-item'>
            <span className='label-text' id='img-name'>Nombre Img</span>
            <input type='text' className='text-input'></input>
          </div> */}
          <button className='button-template-admin update-button' onClick={saveFirebaseImg}>Actualizar</button>
        </form>

        <form
          action="#"
          className={!formUpload ? "form-admin form-admin-active" : "form-admin"}
          id="form-delete-img"
        >
          <div className='form-item'>
            <label className='label-text'> Imagen del carrusel: </label>
            <select required className='dropdown' ref={dropdownRef}>
              {
                dropdownValues.map((value, index) => (
                  <option
                    value={value._id}
                    key={value._id}
                  >
                    {`Imagen-${index + 1}`}
                  </option>
                ))
              }
            </select>
          </div>
          <button
            className='button-template-admin update-button'
            // onSubmit={sendDeleteRequere}
            onClick={sendDeleteRequere}
          >
            Eliminar IMG
          </button>
        </form>

      </div>
    </section>
  );
}
export default SliderAboutUsForm;