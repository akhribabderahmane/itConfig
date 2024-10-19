import TopBar from "../shared/TopBar";
import Header from "../shared/Header";
import Flow from "./Flow";
import NetworkFlow from "./NetworkFlow";

const Network = () => {
  return (
    <div className=" w-full rounded-t-md space-y-10 mb-20  ">
      <TopBar page={"Network"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={"> On branch my-network"}
          description={"> Visualize the current state of your network below."}
          keyword={"Network"}
        />
      </div>
      <div className=" w-full h-[500px]    border-2 px-4 rounded-lg">
        <NetworkFlow />
      </div>
    </div>
  );
};

export default Network;
