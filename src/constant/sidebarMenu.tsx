import { IoIosGitNetwork } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";

const sidebarMenu=[
    {link:"/principal/network",title:"My network",icon:<IoIosGitNetwork size={30} className=" text-itconfig-blue-dark" />},
    {link:"/principal/clients",title:"My Clients",icon:<MdPeopleAlt size={30}  className=" text-itconfig-blue-dark"/>},
    {link:"/principal/dashboard",title:"Dashboard",icon:<LuLayoutDashboard size={30} className=" text-itconfig-blue-dark" />},
    {link:"/principal",title:"Settings",icon:<IoSettingsSharp size={30} className=" text-itconfig-blue-dark"/>},
]


export default sidebarMenu;