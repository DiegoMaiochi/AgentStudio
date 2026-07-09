import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-black h-screen text-white font-mono flex">
      <div className="border-r border-r-gray-800">
        <Sidebar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Home />
      </div>
    </div>
  );
}

export default App;