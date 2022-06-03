import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNodeForm({
  setAddNodeItem,
  addNodeItem,
  nodes,
  setNodes,
}: {
  setAddNodeItem: any;
  addNodeItem: any;
  nodes: any;
  setNodes: any;
})  : JSX.Element {
  const [label, setLabel] = useState("");

  const [shape, setShape] = useState("");

  const [color, setColor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newNode = {
      id: uuidv4(),
      label: label,
      color: color,
      shape: shape,
      scale: '2em',
      deleted:'false'
    };

    setNodes([...nodes, newNode]);

    setAddNodeItem(!addNodeItem);

  };

  return <>{
  
    <div className="addNodeform h-full w-full bg-blue-100">
    <form 
    onSubmit={ (e) => handleSubmit(e) }
    className="h-full w-full"
    >
      <label className="ml-5 mt-12">
        Shape Label : 
      <input
      className="mt-7 mx-2 px-4"
        type="text"
        placeholder="Node label"
        onChange={(e) => setLabel(e.target.value)}
      />
      </label>
    <br></br>
      <label className="ml-5">
        Shape:
        <select className="my-8 mx-5" value={shape} onChange={(e) => setShape(e.target.value)}>
        <option value=""> </option>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
        </select>
      </label>
      <br></br>
      <label className="ml-5 mt-8">
        Color:
        <select className="my-8 mx-5" value={color} onChange={(e) => setColor(e.target.value)}
        >
        <option value=""> </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="grey">Grey</option>
          <option value="purple">Purple</option>
        </select>
      </label>
      <br></br>
      <button type="submit" className="rounded-md outline outline-3 outline-blue-600 h-auto w-auto px-5 py-3 my-8 ml-24 mb-12 transition ease-in-out delay-150 active:-translate-y-1 active:scale-110 active:bg-indigo-700 duration-200 ">Add Node</button>
    </form>
  </div>
  }</>
}
