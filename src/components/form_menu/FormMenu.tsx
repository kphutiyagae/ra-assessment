import React, { useState } from "react";
import AddNodeForm from "../AddNode";
import { useSpring, animated, config } from "react-spring";
import CustomButton from "../clear_button/CustomButton";

export default function FormMenu( {setAddNodeItem, addNodeItem = false, nodes, setNodes} 
    : {
        setAddNodeItem : any; 
        addNodeItem : any;
        nodes : any;
        setNodes : any;
    }
    )
{

    const [showMenu, setShowMenu] = useState(false);

  //Menu transition fadein
  const menuTransition = useSpring({
    to : {position : "absolute", opacity : 1, display : 'block'},
    enter : {opacity : 1},
    from : {opacity: 0, display : 'none'},
    reverse : showMenu,
    config : config.gentle
    });

    //setShowMenu(setAddNodeItem);

    return (
    <div>
      
      <CustomButton 
      width="8vw"
      height="8vh"
      radius="20px"
      button_content="FAB"
      onClick={ () =>{ setShowMenu(!showMenu); setAddNodeItem(!showMenu); }}
    />    

    <animated.div
    style={menuTransition}
    >

    <AddNodeForm
    setAddNodeItem={setAddNodeItem}
    addNodeItem={addNodeItem}
    nodes={nodes}
    setNodes={setNodes}
    />
    <button
    onClick={ () =>{ setShowMenu(!showMenu); setAddNodeItem(!showMenu); }}
    ></button>
    </animated.div>

    </div>
    )
}
