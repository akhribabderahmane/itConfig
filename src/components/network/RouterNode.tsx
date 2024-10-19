import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };



const RouterNode = ({isConnectable }) => {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <div className=" px-8 py-8 space-y-4 flex flex-col justify-center items-center bg-itconfig-mauve text-white text-base rounded-md font-roboto ">
        <p className=" text-itconfig-blue-dark text-xl font-semibold">Router</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default RouterNode;
