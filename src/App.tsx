import "./App.css";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./pages/Principal";


function App() {
  

  return (
    <div className=" bg-itconfig-bgColor">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/principal/*" element={<Principal />} /> p
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




// import { updateServer,fetchServer } from "./features/server/serviceSlice";
// import { useSelector,useDispatch } from "react-redux";
// import { useState,useEffect } from "react";
// const dispatch = useDispatch();
//   const server = useSelector((state) => state.server.server);
//   const serverStatus = useSelector((state) => state.server.status);
//   const [updatedServer, setUpdatedServer] = useState(server);
//    console.log(updatedServer)
//   useEffect(() => {
//       if (serverStatus === 'idle') {
//           dispatch(fetchServer()); // Fetch server data when component mounts
//       } else if (serverStatus === 'succeeded') {
//           setUpdatedServer(server); // Update local state with fetched data
//       }
//   }, [serverStatus, dispatch, server]);
//   setTimeout(()=>{
//     dispatch(updateServer({
//       "name": "My Server",
//       "ip": "192.168.1.100",
//       "port": 8080,
//       "total_bandwidth": 24, 
//       "used_bandwidth": 0      
//     }));
//   },3000)