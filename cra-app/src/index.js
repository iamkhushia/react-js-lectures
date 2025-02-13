import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PersonalInfo from './Components/PersonalInfo';
import ClassComp from './Components/ClassComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PersonalInfo name="khushi" course="full stack dev." hobby={['music','cooking']}/>
    <ClassComp name="khushi" id="hello"/>
  </React.StrictMode>
);


