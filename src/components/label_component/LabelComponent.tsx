import React from "react";

interface Props {
  children: string;
  width: string;
  height: string;
}

const LabelComponent: React.FC<Props> = ({ children }) => {
  return (
    <div className=" w-auto h-auto">
      <span className="w-auto h-auto">
        <h3>{children}</h3>
      </span>
    </div>
  );
};

export default LabelComponent;
