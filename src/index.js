import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import firebase from 'firebase';
import fbConfig from './scripts/admin/firebase_config'
import App from './components/App'

const page_container = document.getElementById('page-container');
firebase.initializeApp(fbConfig);


ReactDOM.render(<App />,page_container);