import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };


const ClientNode = ({ data, isConnectable }) => {
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

      <div className=" px-8 py-8 space-y-4 flex flex-col justify-center items-center bg-[#EDBA87] text-white text-base rounded-md font-roboto ">
        <p className=" text-itconfig-blue-dark text-xl font-semibold">
          Client {data.index}
        </p>
        <div className="flex-col justify-center items-center space-y-2">
          <p className=" max-w-40  truncate">ip :{data.ip}</p>
          <div>
            <p className="  text-purple-800 ">Max :{data.subscription}Mbps</p>
            <p className=" text-teal-600">wants :{data.current_requested_bandwidth}Mbps</p>
            <p className=" text-rose-600">gets :{data.subscription}Mbps</p>
          </div>
        </div>
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

export default ClientNode;
