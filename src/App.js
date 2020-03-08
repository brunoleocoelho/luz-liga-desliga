import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [lampada, setlampada] = useState(true)

  // true -> ligada
  // false -> desligada 
  const ligadesliga = () => {
    setlampada( !lampada )
  } 

  return (
    <div style={{backgroundColor: 'black'}}>
      { 
        (lampada) 
        ? (
          <div>
            <img src={require('./img/liga.png')}  onClick={ligadesliga} />
            <img src={require('./img/light-ON.png')} />
          </div>
        )
        : (
          <div>
            <img src={require('./img/desliga.png')} onClick={ligadesliga} />
            <img src={require('./img/light-OFF.png')} />
          </div>
        )

      }
      
    </div>
  );
}

export default App;
