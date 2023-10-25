import React,{ useState } from 'react';
import './App.css';


function App() {
  return [
    <div className='border'>
      Doboz - App
      <BoxComponent hatterSzin="red" szelesseg="220px" magassag="150px" szamlalo={0}/>
      <BoxComponent hatterSzin="blue" szelesseg="240px" magassag="200px" szamlalo={2}/>
      <BoxComponent hatterSzin="green" szelesseg="260px" magassag="250px" szamlalo={3}/>
    </div>
  ];
}

function BoxComponent(props){
  const [aktualErtek,ujAktualErtek] = useState(props.szamlalo)
  return(
    <div 
    style={{
      width: props.szelesseg,
      height:props.magassag,
      backgroundColor:props.hatterSzin
    }}
      className="p-2 m-5 rounded"
      onClick={()=>{
        ujAktualErtek((elozoAllapot)=> elozoAllapot+1);
      }}>
        <h1>{aktualErtek}</h1>
    </div>
  );
}

export default App;
