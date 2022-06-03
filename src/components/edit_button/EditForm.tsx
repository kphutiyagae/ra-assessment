import React, { useState } from "react";

export default function EditNodeForm({
  setEditNodeItem,
  editNodeItem,
  nodes,
  setNodes,
  currentNode,
}: {
  setEditNodeItem: any;
  editNodeItem: any;
  nodes: any;
  setNodes: any;
  currentNode: any;
}): JSX.Element {
  const [label, setLabel] = useState("");

  const [shape, setShape] = useState("");

  const [color, setColor] = useState("");

  const [scale, setScale] = useState("");

  const handleSubmit = (e: React.FormEvent, node : any) => {
    e.preventDefault();

    //Delete old node
    node.deleted = true;

    let newNode = {
      id: node.id,
      label: label,
      color: color,
      shape: shape,
      scale: scale,
      deleted: false
    };

    setNodes([...nodes, newNode]);

    setEditNodeItem(!editNodeItem);

  };

  if(currentNode !== null){
  
  return (
    <>
      {
        <div className="editNodeForm">
          <form onSubmit={(e) => handleSubmit}>
            <input
              type="text"
              defaultValue={currentNode.label}
              onChange={(e) => setLabel(e.target.value)}
            />

            <br></br>
            <label>
              Shape:
              <select value={shape} onChange={(e) => setShape(e.target.value)}>
                <option value=""> </option>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
              </select>
            </label>
            <br></br>
            <label>
              Color:
              <select value={color} onChange={(e) => setColor(e.target.value)}>
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
            <label>
              Scale:
              <select value={scale} onChange={(e) => setScale(e.target.value)}>
                <option value={currentNode.scale}> {currentNode.scale} </option>
                <option value="0.5em">0.5</option>
                <option value="1em">1</option>
                <option value="1.5em">1.5</option>
                <option value="2em">2</option>
                <option value="2.5em">2.5</option>
                <option value="3em">3</option>
              </select>
            </label>
            <br></br>
            <button type="submit">Add Node</button>
          </form>
        </div>
      }
    </>
  );

  }

  else{
  
    return (
      <>
        {
          <div className="editNodeForm">
            <form onSubmit={(e) => handleSubmit}>
              <input
                type="text"
                defaultValue=""
                onChange={(e) => setLabel(e.target.value)}
              />
  
              <br></br>
              <label>
                Shape:
                <select value={shape} onChange={(e) => setShape(e.target.value)}>
                  <option value=""> </option>
                  <option value="square">Square</option>
                  <option value="circle">Circle</option>
                  <option value="rectangle">Rectangle</option>
                  <option value="triangle">Triangle</option>
                </select>
              </label>
              <br></br>
              <label>
                Color:
                <select value={color} onChange={(e) => setColor(e.target.value)}>
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
              <label>
                Scale:
                <select value={scale} onChange={(e) => setScale(e.target.value)}>
                  <option value=""> </option>
                  <option value="0.5em">0.5</option>
                  <option value="1em">1</option>
                  <option value="1.5em">1.5</option>
                  <option value="2em">2</option>
                  <option value="2.5em">2.5</option>
                  <option value="3em">3</option>
                </select>
              </label>
              <br></br>
              <button type="submit">Add Node</button>
            </form>
          </div>
        }
      </>
    );
  
  }
}
