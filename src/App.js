//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
//import { createPortal } from 'react-dom';
import {ColorBlock} from './components/ColorBlock'
import ColorForm from './components/ColorForm'

const DEFAULT_COLORS = ['violet', 'blue','lightblue', 'green', 'greenyellow', 'yellow','orange', 'red']


function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const colorMap = colors.map(c => <ColorBlock color = {c}/>)
  return (<div className= "App">
    {colorMap}
    <ColorForm addColor={setColors} />
    </div>);

}

export default App;
  
  /*let [colors, setColors] = useState([ 
    'violet', 'blue',
    'lightblue', 'green', 
    'greenyellow', 'yellow',
    'orange', 'red'
  ])
  
  let colorMap = colors.map((color, i) => {
    return (
      
      <ColorBlock color={color}/>
    )
  })
  

  return (
    <div className="App">
    {colors.map((color, i) =>
    <ColorBlock key = {i} color = {color}/>
    )}
    </div>
  )
}*/


