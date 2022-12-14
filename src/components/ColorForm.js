

    /*const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        props.addColor(input)
    }

    function ColorForm(props){
        let [input, setInput] = useState('')

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}*/

import React, {useState} from 'react'
//import ColorForm from './components/ColorForm'



export default function ColorForm(props){
    let [inputColor, setInputColor] = useState(props.colors);

    const handleAddColor = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault();
        // addColor, the function we just built, should be available within props.
        props.addColor(inputColor);
        
    }


    return (
        <div>
            <form>
                <input type="text" 
                onChange={e =>setInputColor}value={inputColor}></input> 
                <button type='submit'onClick={handleAddColor}>Add Color</button>
            </form>
        </div>
    )
}
