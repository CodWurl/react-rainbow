import React, { useState } from "react";
import React from "react";
//import './App.css';
//import ColorBlock from './ColorBlock'

export default function ColorForm (props) {
    let [inputColor, setInputColor] = useState(props.colors);

    const handleInput = (e) => {
       e.preventDefault();
       props.addColor(e.target.value);
       setInputColor('');

    }
    return (<div>
        <form>
            <input type="text"
            onChange={handleInput} value={inputColor}></input>
            <button type='submit'>Add Color</button>
        </form>
        </div>)
}

//export default ColorForm;


/*function ColorForm(props){
    let [input, setInput] = useState('')

    return (
        <div>
            <form>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}*/

