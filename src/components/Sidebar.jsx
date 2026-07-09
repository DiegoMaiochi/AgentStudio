import logo from "../assets/logo.png";

function Sidebar(){
    return(
        <div className="h-screen flex flex-col items-center mx-14">
            <div className="mt-4">
                <img src={logo} alt="Logo" className="w-35" />
            </div>

            <div className="mt-52 text-center">
                <p className="my-1 p-1 px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-500 rounded-lg cursor-pointer">Dashboard</p>
                <p className="my-1 p-1 px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-500 rounded-lg cursor-pointer">Projetos</p>
                <p className="my-1 p-1 px-3 py-1 hover:bg-gray-500 hover:scale-110 transition duration-500 rounded-lg cursor-pointer">Features</p>
            </div>
        </div>
    )
}

export default Sidebar