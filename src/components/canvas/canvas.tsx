import NodeComponent from "../node_component/NodeComponent";

const test_function = () => {
  console.log("A");
};

export default function Canvas({
  nodes_list,
  addNodeItem,
  editNodeIt,
  setEditNodeIt,
  editSubmit,
  currNode,
  setCurrNode,
}: {
  nodes_list: any;
  addNodeItem: any;
  editNodeIt: any;
  setEditNodeIt: any;
  editSubmit: any;
  currNode: any;
  setCurrNode: any;
}) {
  return (
    <>
      {nodes_list
        .filter((item: any) => item.deleted === "false")
        .map((e: any) => {
          return (
            <NodeComponent
              key={e.id}
              currentNode={e}
              nodes={nodes_list}
              addNodeItem={addNodeItem}
              onClick={test_function}
              onHold={test_function}
              editNodeIt={editNodeIt}
              setEditNodeIt={setEditNodeIt}
              currNodeVar={currNode}
              setCurrNode={setCurrNode}
              editFunct={editSubmit}
            />
          );
        })}
    </>
  );
}
