import { useState } from 'react'

// components
import FirstComponent from './components/FirtsComponent';
import TemplateExpressions from './components/TemplateExpressions';

// styles 
import './App.css'

function App() {

  return (
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent /> 
      <TemplateExpressions/>
    </div>
  );
}

export default App;
