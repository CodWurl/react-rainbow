import React, { useState } from 'react'
//mport React, {useState} from 'react'
// Make sure to import the component we just built:
import { Colorblock } from "./components/ColorBlock"
import './App.css'
import ColorForm from './components/ColorForm'



/*function App(){
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    return (
        <div className="App">
        {colors.map((color, {i}) =>
        <ColorBlock key = {i} color = {color}/>
        )}
        </div>
      )
    }*/


const DEFAULT_COLORS = ['RED', 'YELLOW','BROWN', 'BLUE','WHITE','BLACK', 'GREEN', 'VIOLET', 'TEAL', 'GREENYELLOW', 'LIGHTBLUE', 'GRAY', 'ORANGE']



function App() {
    const [colors, setColors]= useState(DEFAULT_COLORS);
    const colorMap = colors.map(c => <Colorblock color={c} />)
    return (<div className="App">
        {colorMap}
        <ColorForm addColor={setColors}/>
        </div>);
}

export default App;
