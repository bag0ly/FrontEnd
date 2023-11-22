import React, { useDebugValue, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';


function App() {
  const [clickCount,setClickCount] = useState(0)

  useEffect(()=>{
    document.title="Kattintások száma: "+ clickCount;
    console.log(clickCount);
  },[clickCount]);

  return (
    <div className="card w-25">
      Kattintások száma: {clickCount}
      <button className='btn btn-primary'
      onClick={()=>{
        setClickCount((elozo)=> elozo+1);
      }}
      >
        Kattints!
      </button>
    </div>
  );
}

export default App;
