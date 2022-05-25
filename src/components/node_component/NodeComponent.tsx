import React from "react";
import ShapeComponent from "../shape_component/ShapeComponent";
import LabelComponent from "../label_component/LabelComponent";

interface Props {
  onClick: () => void;
  onHold: () => void;
}

const NodeComponent: React.FC<Props> = ({ onClick, onHold }) => {
  return (
    <div>
      <LabelComponent width="3vw" height="auto" children="Shape A"/>
      <ShapeComponent />
    </div>
  );
};

export default NodeComponent;
