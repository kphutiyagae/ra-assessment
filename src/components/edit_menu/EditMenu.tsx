import React, { useState } from "react";
import EditNodeForm from "../edit_button/EditForm";
import { useSpring, animated, config } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function EditMenu( {editNodeItem, setEditNodeItem, nodes, setNodes, currentN} 
: 
{
    editNodeItem : any;
    setEditNodeItem : any;
    nodes : any;
    setNodes : any;
    currentN : any;
} )
{
  
    const [showMenu, setShowMenu] = useState(false);

  //Menu transition fadein
  const menuTransition = useSpring({
    to : {position : "absolute", opacity : 1, display : 'block'},
    enter : {opacity : 1},
    from : {opacity: 0, display : 'none'},
    reverse : !showMenu,
    config : config.gentle
    });

    return (
        <div>
            <animated.div
            style={menuTransition}
            >
                    <EditNodeForm
                    editNodeItem={editNodeItem}
                    setEditNodeItem={setEditNodeItem}
                    nodes={nodes}
                    setNodes={setNodes}
                    currentNode={currentN}
                    />

            </animated.div>
        </div>
    )
}