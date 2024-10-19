import TopBar from "@/components/shared/TopBar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  const redirectLogIn=()=>{
    navigate("/login")
  }
  const redirectSignUp=()=>{
    navigate("/signup")
  }
  return (
    <div className=" flex flex-col min-h-screen">
      <TopBar page="Admin" />
      <div className=" flex flex-col  items-center  flex-grow gap-20 py-20  ">
        <div className=" flex flex-row gap-12 justify-center items-center">
          <img src="./Logo.svg" alt="logo" />
          <h1 className=" text-itconfig-blue-dark text-8xl font-[800] font-inter">
            IT Config
          </h1>
        </div>
        <div className=" font-roboto  text-3xl max-w-3xl space-y-3">
          <p className=" font-bold tracking-wide ">
            [IT Config@Admin ∼] ${" "}
            <span className=" font-normal"> git status</span>
          </p>
          <p>
            On branch main Your working directory is clean. Welcome to IT
            Config.{" "}
          </p>
          <p>Track and control your network like a pro.</p>
        </div>
        <div className="  flex flex-row justify-between items-center gap-96">
          <button onClick={redirectSignUp} className=" bg-itconfig-mauve  text-3xl font-roboto text-itconfig-blue-dark px-8 py-4 rounded-md">Sign up</button>
          <button onClick={redirectLogIn} className=" bg-itconfig-mauve  text-3xl font-roboto text-itconfig-blue-dark px-8 py-4 rounded-md">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
