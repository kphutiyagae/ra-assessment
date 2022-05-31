import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

export default function AddNodeForm(
{
    setAddNodeItem,
    addNodeItem,
    nodes,
    setNodes
} : {
    setAddNodeItem : any,
    addNodeItem : any,
    nodes : any,
    setNodes : any
}
){
    const [label, setLabel] = useState("");

    const [shape, setShape] = useState("");

    const [color, setColor] = useState("");

    const handleSubmit = ( e : React.FormEvent) => {

        e.preventDefault();

        let newNode = {
            id : uuidv4(),
            label : label,
            color : color,
            shape : shape,
        };

        setNodes([...nodes, newNode]);

        setAddNodeItem(!addNodeItem);
    };

    <div className='addNodeform'>
        <form>

        <input
        type='text'
        placeholder='Node label'
        onChange={ (e) => setLabel(e.target.value)}
        />

        <label>
            Shape:
            <select
            value={color}
            onChange={ (e) => setShape(e.target.value)}
            >
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
                <option value="star">Star</option>
                <option value="oval">Oval</option>
            </select>
        </label>

        <label>
            Color:
            <select
            value={color}
            onChange={ (e) => setColor(e.target.value)}
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="grey">Grey</option>
                <option value="purple">Purple</option>
            </select>
        </label>
        
        <button type='submit'>Add</button>
   
        </form>
 </div>
}