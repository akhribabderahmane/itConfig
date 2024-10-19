import sidebarMenu from "@/constant/sidebarMenu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

const SideBar = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(sidebarMenu[0].title);
  const handleClick = (item) => {
    setSelectedMenu(item.title);
    navigate(item.link);
  };
  return (
    <div className=" w-[340px] min-h-screen  flex flex-col justify-between px-4 py-6 shadow-xl">
      <div>
      <div className=" flex flex-row gap-2 pl-4 mb-20 ">
        <img src="/Logo.svg" className=" w-10 aspect-auto" alt="logo" />
        <h1 className=" text-itconfig-blue-dark text-3xl font-[800] font-inter">
          IT Config
        </h1>
      </div>
      <div className=" flex flex-col gap-3 w-full font-roboto text-base font-medium capitalize">
        {sidebarMenu.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className={`w-full rounded-md text-itconfig-blue-dark hover:bg-itconfig-mauve/20 transition-all duration-300  flex flex-row justify-start items-center gap-4 px-4 py-3 ${
                selectedMenu === item.title ? " bg-itconfig-mauve/20" : ""
              } `}
            >
              {item.icon}
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
      </div>
      <div>
        <button
          className={`w-full font-roboto font-bold text-lg rounded-md  bg-itconfig-mauve text-neutral-100  flex flex-row justify-start items-center gap-4 px-4 py-3 `}
        >
          <TbLogout2 size={30} className=" text-neutral-100" />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default SideBar;

// <nav>
//       <ul>
//         <li><Link to="">Dashboard</Link></li>
//         <li><Link to="settings">Settings</Link></li>
//       </ul>
//     </nav>
