import questionSvg from '../../assets/img-logos/Preguntas.svg'
import React from 'react';

const QuestionCard = (props) => {
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link collapsed"
            data-toggle="collapse"
            data-target={`#${props.collapse}`}
            aria-expanded="true"
            aria-controls={props.collapse}
          >
            {props.title}
          </button>
        </h5>
      </div>
      <div id={props.collapse}
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          
          <div 
            className='card-decoration'
            style={{ background: props.background_color}}
          >
            {props.text}
          </div>
          <img className='question-img' src={questionSvg}></img>

        </div>
      </div>
    </div>
  );
}
export default QuestionCard;