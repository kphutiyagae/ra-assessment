import React from "react";
import CustomButton from "./components/clear_button/CustomButton";
import { useState } from "react";
import Canvas from "./components/canvas/canvas";
import FormMenu from "./components/form_menu/FormMenu";

const containerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#fafafa",
};

const boxStyles: React.CSSProperties = {
  width: "100px",
  height: "100px",
  backgroundColor: "#f00",
};

export const App = () => {
  //States
  const [nodes, setNodes] = useState([]);

  const [currentNode, setNode] = useState(null);

  const [addNodeItem, setAddNodeItem] = useState(false);

  const [editNodeItem, setEditNodeItem] = useState(false);

  let press_time: number = 0;

  //Function to toggle add node menu
  const handleSubmit = () => {
    setAddNodeItem(!addNodeItem);
  };

  //Function to toggle edit node menu
  const handleEditSubmit = (cNode: any) => {
    if (cNode !== null) {
      console.log("Current Node I.D : " + cNode.id);

      setEditNodeItem(!editNodeItem);
    }
  };

  //Function to add new node to list
  const addNode = (node: any) => {
    setNodes(node);
  };

  const editNodeItemFunc = (node: any) => {
    console.log(node.id + " : Label : " + node.label);
  };

  return (
    <div style={containerStyles}>
      <div className="h-screen w-screen grid grid-cols-2 grid-rows-2 col-span-1 gap-1">
        <div className="row-span-2">
          <Canvas
            nodes_list={nodes}
            addNodeItem={addNodeItem}
            editNodeIt={editNodeItem}
            setEditNodeIt={setEditNodeItem}
            editSubmit={handleEditSubmit}
            currNode={currentNode}
            setCurrNode={setNode}
          />
        </div>
        <div className="row-span-1 col-span-1 bg-blue-100">
          <FormMenu
            setAddNodeItem={setAddNodeItem}
            nodes={nodes}
            setNodes={setNodes}
            addNodeItem={() => addNodeItem}
          />
        </div>

        <div className="row-span-1 col-span-1 bg-blue-100">
          <div className="mt-24 ml-48">
            <CustomButton
              radius="8px"
              height="auto"
              width="8vw"
              button_content="Clear"
              onClick={() => {
                setNodes([]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
