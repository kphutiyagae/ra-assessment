import React from "react";
import { Box } from "./components/Box";
import CustomButton from "./components/clear_button/CustomButton";
import NodeComponent from "./components/node_component/NodeComponent";
import { useState } from "react";

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

  const [addNodeItem, setAddNodeItem] = useState(false);

  //Function to toggle add node menu
  const handleSubmit = () => {
    setAddNodeItem(!addNodeItem);

    console.log("Hello : " + addNodeItem);
  };

  //Function to add new node to list
  const addNode = (node: any) => {
    setNodes(node);
  };

  return (
    <div style={containerStyles}>
      <NodeComponent
        onClick={() => console.log("Node clicked!")}
        onHold={() => console.log("Node pressed and held!")}
      />

      <CustomButton
        radius="8px"
        height="auto"
        width="8vw"
        button_content="Clear"
        onClick={() => console.log("Clear screen button clicked")}
      />

      <CustomButton 
      width="8vw"
      height="8vh"
      radius="20px"
      button_content="FAB"
      onClick={handleSubmit}      
      />
    </div>
  );
};
