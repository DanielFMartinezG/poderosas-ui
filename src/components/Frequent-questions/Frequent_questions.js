import React, { useEffect, useState } from 'react';
import '../../styles/frequent_questions.css';
import QuestionCard from './Question_card';
import {getQuestions, GetQuestiosnAbout} from '../../scripts/frequent-questions/get_questions'

const FrequentQuestions = () => {

  const [peopleQuestions, setpeopleQuestions] = useState([]);
  const [aboutQuestions, setAboutQuestions] = useState([]);

  useEffect(async function() {
    const responseQuestion = await getQuestions();
    const responseQuestionsAbout = await GetQuestiosnAbout();
    setpeopleQuestions(responseQuestion);
    setAboutQuestions(responseQuestionsAbout);  
  },[]);

  return (
    <section id="frequent-questions">
      <div className="container-questions">
        <h2 className='main-title'>Preguntas frecuentes</h2>
      </div>
      <div id="tab-question" className="container-questions">
        <ul className="nav nav-tabs">
          <li className="active tap-header">
            <a href="#1" data-toggle="tab">DE LAS PODEROSAS</a>
          </li>
          <li className="tap-header">
            <a href="#2" data-toggle="tab">SOBRE PODEROSAS</a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="1">
            {
              peopleQuestions.map((question, index) => (
                <QuestionCard
                  title={question.title}
                  text={question.text}
                  collapse={`collapse-${index}`}
                  background_color={index % 2 === 0 ? '#d6dff0' : '#f6b990'}
                  key={`podQuestion-${index}`}
                />
              ))
            }
          </div>
          <div className="tab-pane" id="2">
            {
              aboutQuestions.map((question, index) => (
                <QuestionCard
                  title={question.title}
                  text={question.text}
                  collapse={`collapse-about-${index}`}
                  background_color={index % 2 === 0 ? '#d6dff0' : '#f6b990'}
                  key={`podAboutQuestion-${index}`}
                />
              ))
            }
          </div>
        </div>
      </div>

    </section>
  );
}
export default FrequentQuestions;