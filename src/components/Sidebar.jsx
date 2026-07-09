import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-60 flex flex-col items-center">
            <div className="mt-4">
                <img onClick={() => navigate("/Dashboard")} src={logo} alt="Logo" className="w-35 cursor-pointer" />
            </div>

            <div className="mt-52 flex flex-col items-center space-y-2">
                <button
                    onClick={() => navigate("/Dashboard")}
                    className="px-3 py-1 hover:scale-120 transition duration-200 rounded-lg cursor-pointer"
                >
                    Dashboard
                </button>

                <button
                    onClick={() => navigate("/projetos")}
                    className="px-3 py-1 hover:scale-120 transition duration-200 rounded-lg cursor-pointer"
                >
                    Projetos
                </button>

                <button
                    onClick={() => navigate("/atualizacoes")}
                    className="px-3 py-1 hover:scale-120 transition duration-200 rounded-lg cursor-pointer"
                >
                    Atualizações
                </button>
            </div>
        </div>
    );
}

export default Sidebar;