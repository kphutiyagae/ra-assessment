import { useState } from "react";
import AddNodeForm from "../AddNode";
import { useSpring, animated, config } from "react-spring";
import CustomButton from "../clear_button/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function FormMenu({
  setAddNodeItem,
  addNodeItem = false,
  nodes,
  setNodes,
}: {
  setAddNodeItem: any;
  addNodeItem: any;
  nodes: any;
  setNodes: any;
}) {
  const [showMenu, setShowMenu] = useState(false);

  //Menu transition fadein
  const menuTransition = useSpring({
    to: { position: "absolute", opacity: 1, display: "block" },
    enter: { opacity: 1 },
    from: { opacity: 0, display: "none" },
    reverse: !showMenu,
    config: config.gentle,
  });

  //setShowMenu(setAddNodeItem);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 grid-rows-1 w-full h-full">
        <div className="col-span-1 row-span-1">
          <animated.div style={menuTransition} className="h-auto w-auto">
            <AddNodeForm
              setAddNodeItem={setAddNodeItem}
              addNodeItem={addNodeItem}
              nodes={nodes}
              setNodes={setNodes}
            />
          </animated.div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 h-full w-full ">
          <CustomButton
            width="auto"
            height="auto"
            radius="20px"
            button_content={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => {
              setShowMenu(!showMenu);
              setAddNodeItem(!showMenu);
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
}
