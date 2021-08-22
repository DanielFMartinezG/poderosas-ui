import React, { useState, useEffect, useRef } from 'react';
import '../../styles/map.css'
import Map_desktop from './Map-desktop';
import Map_mobil from './Map-mobile';
import close_icon from '../../assets/img-stickers/close.svg';
import bttn_left from '../../assets/img-stickers/slide-bttn-left.png'
import bttn_right from '../../assets/img-stickers/slide-bttn-right.png'
import getEventsDepartment from '../../scripts/map.js/get_events_department';
import events_array from '../../scripts/map.js/events-departments';

const Map = () => {

  //estado creado para la visibilidad de la carta de eventos
  const [eventCard, setEventCard] = useState({ visibility: 'hidden' });
  const [event, setEvent] = useState([]);
  const [eventsArray, setEventsArray] = useState(events_array);
  const [requestState, setRequestState] = useState('NotSubmitted');
  //referencia creada para llamar al map-event-container desde el dom virtual
  const card_events = useRef();
  //referencia al contenedor del mapa
  const map_container = useRef();
  //función encargada de mover el event-card y llamar actualizar la información de los eventos 
  const getInfoDepartment = (evt) => {
    const event_card = card_events.current;//equivalente a getElements, en react, se utiliza ref.current
    const index = eventsArray.findIndex(dept => dept.department_id === evt.target.id);
    const mapContainer = map_container.current;

    if (eventsArray[index].event.length !== 0) {
      let dpto_event =
      {
        department: eventsArray[index].department_id,
        event_title: eventsArray[index].event[0].event_title,
        event_descritpion: eventsArray[index].event[0].event_descritpion
      }
      setEvent(dpto_event);
      /*la visualización de EventCard variará dependiendo del tamaño de la pantalla,
      en pantallas menores de 768px se ubicará en el centro del componente, en pantallas
      mayores, la tarjeta se ubicará en el departamento que se clickeo */
      if (mapContainer.clientWidth < 768) {
        const dist_x = mapContainer.clientWidth * 0.5 - event_card.offsetWidth / 2;
        setEventCard({ visibility: "visible", transform: `translate(${dist_x}px)` })
      } else {
        const dist_x = evt.clientX - event_card.offsetWidth / 2;
        const dist_y = (evt.nativeEvent.layerY - event_card.offsetHeight - 15);
        setEventCard({ visibility: "visible", transform: `translate(${dist_x}px, ${dist_y}px)` })
      }
    }
  }

  /*
    función encargada de recorrer los eventos de un departamento, mediante está función
    cambio la información de la tarjeta de descripción de un evento
  */
  const changEventInfo = (evt) => {
    const index_dpto = eventsArray.findIndex(dpto => dpto.department_id === event.department);
    const index_event = eventsArray[index_dpto].event.findIndex(evt => evt.event_title === event.event_title);
    const i = (evt.target.id === 'bttn-event-slide-left') ? (-1) : (1);
    if (
      index_event + i < eventsArray[index_dpto].event.length &&
      index_event + i >= 0
    ) {
      let dpto_event =
      {
        department: eventsArray[index_dpto].department_id,
        event_title: eventsArray[index_dpto].event[index_event + i].event_title,
        event_descritpion: eventsArray[index_dpto].event[index_event + i].event_descritpion
      }
      setEvent(dpto_event);
    }
  }

  /* creamos el state que nos permitirá controlar la visualización del mapa,
  igualmente, le damos la estructura del objeto que almacenará */
  const [colombiaMap, setColombiaMap] = useState({ mapComponent: '', map: '' });

  /* showInitColombianMap nos permitira identificar el mapa que se mostrará inicialmente,
  puede ser desktop o mobil */
  const showInitColombianMap = () => {
    const mapContainer = map_container.current;
    if (mapContainer.clientWidth < 768) {
      return ({
        mapComponent: <Map_mobil getInfoDepartment={getInfoDepartment} />,
        map: 'mobil',
      });
    } else {
      return ({
        mapComponent: <Map_desktop getInfoDepartment={getInfoDepartment} />,
        map: 'desktop',
      });
    }
  }

  //window.onresize permite identificar el cambio en el tamaño de la pantalla 
  window.onresize = () => {
    /* mapContainer nos permite acceder a las propiedades del nodo contenedor
    del DOM virutal que almacena el mapa */
    const mapContainer = map_container.current;
    /* chequeamos el tamaño del contenedor para renderizar el mapa respectivo,
    además, verificamos en que pantalla nos encontramos, de está manera, no se 
    renderizará nuevamente el mapa desktop si ya estemos en la pantalla desktop o
    la mobil si ya estamos en la mobil */
    if (mapContainer.clientWidth < 768 &&
      colombiaMap.map == 'desktop'
    ) {
      setColombiaMap({
        mapComponent: <Map_mobil getInfoDepartment={getInfoDepartment} />,
        map: 'mobil',
      });
    } else if (mapContainer.clientWidth >= 768 &&
      colombiaMap.map == 'mobil'
    ) {
      setColombiaMap({
        mapComponent: <Map_desktop getInfoDepartment={getInfoDepartment} />,
        map: 'desktop',
      });
    }
  }

  useEffect(async function () {
    //requestState permite que getEventsDepartment solo se ejecuté una vez
    if (requestState === 'NotSubmitted') {
      const currentEvents = await getEventsDepartment();
      //asignamos en events_array los eventos traidos de la BD
      currentEvents.forEach(event => {
        const index = events_array.findIndex(val => val.department_id === event.ID_departament);
        events_array[index].event.push({
          event_id: event._id,
          event_title: event.name_event,
          event_descritpion: event.descripcion,
        });
      });
      setEventsArray(events_array);
      setColombiaMap(showInitColombianMap());
      setRequestState('Success');
    }
    /*ocultamos la tarjeta de envento del mapa si hay un cambio 
    en el tamaño de la pantalla, es para controlar el responsive*/
    if (eventCard.visibility != 'hidden') {
      window.addEventListener('resize', () => {
        setEventCard({ visibility: "hidden", transform: `translate(0px, 0px)` })
      });
    }
  })

  return (
    <section className="map-section">
      <h2 className="main-title">mapa de colombia</h2>
      <div className='map-container' ref={map_container}>
        {colombiaMap.mapComponent}
        <div className='map-event-card' id='map-event-card' style={eventCard} ref={card_events}>
          <img
            src={close_icon}
            className='map-event-close-icon'
            onClick={() => setEventCard({ visibility: "hidden" })}
          ></img>
          <img className='bttn-slide-event' id='bttn-event-slide-left' onClick={changEventInfo} src={bttn_left} />
          <div className='card-event-box-info'>
            <p className='card-event-title'>{event.event_title}</p>
            <p className='card-event-content'>{event.event_descritpion}</p>
          </div>
          <img className='bttn-slide-event' id='bttn-event-slide-rigth' onClick={changEventInfo} src={bttn_right} />
        </div>
      </div>
    </section>
  );
}
export default Map;