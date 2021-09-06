import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../styles/admin/formSliderHome.css';
import saveImg from '../../../scripts/admin/save_img_firebase';

const NewsForm = () => {

  const path = 'http://64.227.101.60:4000';
  //utilizamos imgText para mostrar el nombre de la imagen que se está subiendo al formulario 
  const [imgText, setImgText] = useState('sube una imagen');
  const [formUpload, serFormUpload] = useState(true);
  const [dropdownValues, setDropdownValues] = useState([]);
  const history = useHistory();

  const titleRef = useRef();
  const urlRef = useRef();
  const imgNewsRef = useRef();
  const dropdownNewRef = useRef();

  /*función encargada de obtener el nombre de la imagen subida e igualmente
  controlar el tamaño de la imagen subida*/
  const changeNewImgText = (event) => {
    event.preventDefault();
    if (imgNewsRef.current.files.length > 0 &&
      imgNewsRef.current.files[0].size < 2097152) {
      setImgText(imgNewsRef.current.files[0].name);
    }
  }

  /* función encargada de ejecutar el almacenamiento de la imagen a 
  firebase storage y ejecutar el metodo post para guardar la noticia */
  async function saveFirebaseImg(event) {
    event.preventDefault();
    const file = imgNewsRef.current.files[0];
    const url = urlRef.current;
    const title = titleRef.current;

    if (file !== undefined &&
      url.value !== '' &&
      title.value !== '') {
      alert('Actualización en proceso...');
      saveImg('poderosas-noticias', file, (value) => {
        console.log(`Img URL: ${value}`);
        // una vez obtenida la url terminamos de envíar el post
        sendPostRequire(value, title.value, url.value);
      });
    } else {
      alert('Complete el formulario.');
    }
  }

  /**
   * Función encargada de ejecutar el metodo POST para almacenar la noticia
   * @param {*} urlImg url de la imagen almacenada en FirebaseStorage
   * @param {*} title  titulo de la noticia
   * @param {*} url url de la noticia
   */
  async function sendPostRequire(urlImg, title, url) {
    try {
      const token = localStorage.getItem('admin');
      //armamos el objeto a enviar con la info de la noticia
      const body = {
        title: title,
        img: urlImg,
        link: url,
      }
      const response = await fetch(`${path}/newSlider/createNew`, {
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
      } else if (responseJson.msq === 'Noticia insertada con exito') {
        alert('Noticia insertada con éxito.');
        window.location.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  const showUploadForm = () => {
    serFormUpload(true);
  }

  const showDeleteForm = () => {
    serFormUpload(false);
  }

  /**
   * función encargada de implementar el metodo DELETE para eliminar una noticia 
   * almacenada en la base de datos
   * @param event objeto tipo evento
   */
  async function sendDeleteRequere(event) {
    event.preventDefault();
    const token = localStorage.getItem('admin');
    let dropdown = dropdownNewRef.current;
    const response = await fetch(`${path}/newSlider/deleteNew`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `bearer ${token}`
      },
      method: "DELETE",
      body: JSON.stringify({ id: dropdown.value })
    });
    const responseJson = await response.json();
    if (responseJson.msq === 'Noticia eliminada con exito') {
      alert('Noticia eliminada con éxito.');
    } else if (responseJson.msq === 'Token Expired') {
      alert('Su sesión expiró, inicie sesión nuevamente.');
      history.push('./login');
    } else {
      alert('Tuvimos un problema, intetalo más tarde.');
    }
    window.location.reload();
  }

  //ejecutamos el useEffect una sola vez, al cargar por primera vez el componente
  useEffect(async function () {
    /*obtenemos las imagenes almacenadas actualmente en la base de datos y procedemmos
    a guardarlas en su respectivo estado */
    const response = await fetch(`${path}/newSlider/getNews`);
    const jsonResponse = await response.json();
    const news = jsonResponse.resultado;
    setDropdownValues(news);
  }, [])

  return (
    <section className='admin-form'>
      <p className='sub-title-admin'>Poderosas en los medios</p>
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
            <span className='label-text' id='news-title'>Títular</span>
            <input type='text' className='text-input' ref={titleRef}></input>
          </div>
          <div className='form-item'>
            <span className='label-text' id='news-url'>Url</span>
            <input type='text' className='text-input' ref={urlRef}></input>
          </div>
          <div className='form-item'>
            <label className='label-text'>Imagen</label>
            <span className='updload-img-box'>
              <input
                type="file"
                accept='image/png, .jpeg, .jpg,'
                name="news-files"
                className='upload-label'
                id='upload-label-news'
                ref={imgNewsRef}
                key='upload-img-news'
                onChange={changeNewImgText}
              >
              </input>
              <label
                htmlFor='upload-label-news'
                className='button-template-admin upload-img-bttn'
              >
                Subir Img
              </label>
              <p className='upload-img-name' id="file-chosen">{imgText}</p>
            </span>
          </div>

          <button className='button-template-admin update-button' onClick={saveFirebaseImg}>Actualizar</button>
        </form>

        <form
          action="#"
          className={!formUpload ? "form-admin form-admin-active" : "form-admin"}
          id="form-delete-img"
        >
          <div className='form-item'>
            <label className='label-text'> Seleccionar Noticia: </label>
            <select required className='dropdown' ref={dropdownNewRef}>
              {
                dropdownValues.map((value, index) => (
                  <option
                    value={value._id}
                    key={value._id}
                  >
                    {value.title_new}
                  </option>
                ))
              }
            </select>
          </div>
          <button
            className='button-template-admin update-button'
            onClick={sendDeleteRequere}
          >
            Eliminar
          </button>
        </form>

      </div>
    </section>
  );
}
export default NewsForm;