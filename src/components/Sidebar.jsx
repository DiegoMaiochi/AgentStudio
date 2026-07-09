import { Features } from "tailwindcss";
import logo from "../assets/logo.png";
import Dashboard from "./Dashboard";
import Projetos from "./Projetos";
import Atualizacoes from "./Atualizacoes";
import { useNavigate } from "react-router-dom";

function Sidebar(){

    const navigate = useNavigate();

    return(
        <div className="h-screen flex flex-col items-center mx-14">
            <div className="mt-4">
                <img src={logo} alt="Logo" className="w-35" />
            </div>

           <div className="mt-52 flex flex-col items-center space-y-2">
                <button onClick={() => navigate (<Dashboard />)}  className="px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-300 rounded-lg cursor-pointer">Dashboard</button>

                <button onClick={() => navigate (<Projetos />)} className="px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-300 rounded-lg cursor-pointer">Projetos</button>

                <button onClick={() => navigate (<Atualizacoes />)} className="px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-300 rounded-lg cursor-pointer">Atualizações</button>
            </div>
        </div>
    )
}

export default Sidebar