import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
//la veriable que se importa de un componentes debe tener la primera letra en mayuscula
import App from './components/App'
const page_container = document.getElementById('page-container');
ReactDOM.render(<App />,page_container);