import Leftbar from "./components/LeftBar/Leftbar";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/RightBar/Rightbar";
import Update from "./components/Update/Update";

import "./App.css";

const App = () => {
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