import React, {useState,useEffect, useRef} from 'react';
import '../../styles/map.css'
import Map_desktop from './Map-desktop';
import Map_mobil from './Map-mobile';
import close_icon from '../../assets/img-stickers/close.svg';
import bttn_left from '../../assets/img-stickers/slide-bttn-left.png'
import bttn_right from '../../assets/img-stickers/slide-bttn-right.png'



import events_array from '../../scripts/map.js/events-departments';


const Map =()=>{
  //estado creado para la visibilidad de la carta de eventos
  //utilizo un visibility porque el display none me genera problemas
  const [eventCard, setEventCard] = useState({visibility: 'hidden'})
  const [event, setEvent] = useState([])
  //referencia creada para llamar al map-event-container desde el dom virtual
  const card_events = useRef();
  //función encargada de mover el event-card y llamar actualizar la información de los eventos 
  const getInfoDepartment =(evt)=>{
    const event_card = card_events.current;//equivalente a getElements, en react, se utiliza ref.current
    const index = events_array.findIndex(dept => dept.department_id === evt.target.id);
    if(events_array[index].event.length !== 0){
      let dpto_event = 
      {
        department: events_array[index].department_id,
        event_title: events_array[index].event[0].event_title,
        event_descritpion:events_array[index].event[0].event_descritpion
      }
      setEvent(dpto_event);

      if(window.screen.width < 768){

        const dist_x = window.screen.width*0.5 -  event_card.offsetWidth/2;
        setEventCard({visibility: "visible", transform: `translate(${dist_x}px)`})

      }else{

        const dist_x = evt.clientX - event_card.offsetWidth/2;
        const dist_y = (evt.nativeEvent.layerY- event_card.offsetHeight -15);
        setEventCard({visibility: "visible", transform: `translate(${dist_x}px, ${dist_y}px)`})

      }
      
    }
  }
  const changEventInfo = (evt)=>{
    const index_dpto = events_array.findIndex(dpto => dpto.department_id === event.department);
    const index_event = events_array[index_dpto].event.findIndex(evt => evt.event_title === event.event_title);
    const i = (evt.target.id=== 'bttn-event-slide-left')?(-1):(1);
    if(  
      index_event+i < events_array[index_dpto].event.length &&
      index_event+i >= 0
    ){
      let dpto_event = 
        {
          department: events_array[index_dpto].department_id,
          event_title: events_array[index_dpto].event[index_event+i].event_title,
          event_descritpion:events_array[index_dpto].event[index_event+i].event_descritpion
        }
        setEvent(dpto_event);
    }
  }
  useEffect(()=>{
  })
  return(
    <section className= "map-section">
      <h2 className="map-section-title">mapa de colombia</h2>
      <div className='map-container'>
        {(window.screen.width < 1024)? (<Map_mobil getInfoDepartment ={getInfoDepartment} />):(<Map_desktop getInfoDepartment ={getInfoDepartment} />)}
        <div className='map-event-card' id='map-event-card' style={eventCard} ref={card_events}>
          <img 
            src={close_icon} 
            className='map-event-close-icon'
            onClick={()=>setEventCard({visibility: "hidden"})}
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