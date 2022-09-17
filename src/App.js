import { useEffect } from "react";
import axios from "axios";

import Leftbar from "./components/LeftBar/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/RightBar/Rightbar";
import Update from "./components/Update/Update";

import "./App.css";

const App = () => {

  // const showUser = async () => {
  //   const res = await axios.get("http://localhost:8000/user");
  //   console.log(res);
  // }

  // useEffect(() => {
  //   showUser();
  // }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;