import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-black h-screen text-white font-mono flex">
      <div className="border-r border-r-gray-800">
        <Sidebar />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;