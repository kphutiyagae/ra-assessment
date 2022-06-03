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
    className="rounded-full outline outline-4 outline-blue-600 h-auto w-auto p-5 m-5 transition ease-in-out delay-150 active:-translate-y-1 active:scale-110 active:bg-indigo-700 duration-200 "
      onClick={onClick}
      style={{
        height,
        width,
      }}
    >
      {button_content}
    </button>
  );
};

export default CustomButton;
