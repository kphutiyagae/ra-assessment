import React from "react";
import NodeComponent from "../node_component/NodeComponent";

const test_function = () => {
  console.log("A");
};

export default function Canvas({
  nodes_list,
  addNodeItem,
}: {
  nodes_list: any;
  addNodeItem: any;
}) {
  return (
    <>
      {nodes_list.map((e: any) => {
        
        return (

          <NodeComponent
            key={e.id}
            currentNode={e}
            nodes={nodes_list}
            addNodeItem={addNodeItem}
            onClick={test_function}
            onHold={test_function}
          />
        );
      })}
    </>
  );
}
