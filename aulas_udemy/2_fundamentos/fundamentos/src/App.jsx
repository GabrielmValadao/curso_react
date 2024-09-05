import { useState } from 'react'

// components
import FirstComponent from './components/FirtsComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';

// styles 
import './App.css'
import Challenge from './components/Challenge';

function App() {

  return (
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent /> 
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
      
    </div>
  );
}

export default App;
