import Header from "../shared/Header";
import TopBar from "../shared/TopBar";
import Bars from "./Bars";
import Circle from "./Circle";
import LineDraw from "./LineDraw";

const Dashboard = () => {
  return (
    <div className=" w-full rounded-t-md space-y-10  ">
      <TopBar page={"dashboard"} rounded={true} />
      <div className=" px-4 py-6 pl-8">
        <Header
          title={"> On branch dashboard network control is active."}
          description={"> Review stats and performance below."}
          keyword={"dashboard"}
        />
      </div>
      <div className=" flex flex-row px-10 gap-6 items-center justify-between">
        <Bars />
        <Circle />
      </div>
      <div className=" px-10">
        <LineDraw />
      </div>
    </div>
  );
};

export default Dashboard;
