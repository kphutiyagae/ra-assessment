import React from "react";
import ShapeComponent from "../shape_component/ShapeComponent";
import LabelComponent from "../label_component/LabelComponent";
import Draggable from "react-draggable";

interface Props {
  onClick: () => void;
  onHold: () => void;
  currentNode : typeof NodeComponent;
  nodes : any;
  addNodeItem : any;
}

const NodeComponent: React.FC<Props> = ({ onClick, onHold, currentNode, nodes, addNodeItem }) => {
  return (
    <Draggable
      bounds="parent"
      defaultPosition={{ x: 0, y: 0 }}
      onStart={onHold}
    >
      <div>
        <LabelComponent width="3vw" height="auto" children="Shape A" />
        <ShapeComponent />
      </div>
    </Draggable>
  );
};

export default NodeComponent;
