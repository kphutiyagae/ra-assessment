import React, { MouseEventHandler } from "react";

interface Props {
  onClick: () => void | null;
  radius: string;
  height: string;
  width: string;
  button_content: any;
  onHold?: MouseEventHandler<HTMLButtonElement> | null;

  
}

const CustomButton: React.FC<Props> = ({
  radius,
  height,
  width,
  onClick,
  button_content,
  
}) => {
  return (
    <button
    className="bg-red-300 h-auto w-auto p-5 m-5"
      onClick={onClick}
      style={{
        borderRadius: radius,
        height,
        width,
      }}
    >
      {button_content}
    </button>
  );
};

export default CustomButton;
