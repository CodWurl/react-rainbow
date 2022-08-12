/*import React from 'react'

function ColorBlock(props){
    return (
        <div className="App">
        {colors.map((color, i) =>
        <ColorBlock key = {i} color = {color}/>
        )}
        </div>
      )
    }
// Do not forget to export your component once you have built it!
export default ColorBlock*/

import React from "react";
//import ColorForm from './components/ColorForm'

//Working Code Below/Original
/*function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock*/

export function Colorblock (props) {
  const {color} = props;
  return (<div className="colorblock" style={{backgroundColor : color}}>
    {color}
  </div>)
}



