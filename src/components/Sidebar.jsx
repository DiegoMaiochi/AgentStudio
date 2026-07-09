import logo from "../assets/logo.png";

function Sidebar(){
    return(
        <div className="h-screen flex flex-col items-center mx-14">
            <div className="mt-4">
                <img src={logo} alt="Logo" className="w-35" />
            </div>

            <div className="mt-52 text-center">
                <p className="p-2">Dashboard</p>
                <p className="p-2">Projetos</p>
                <p className="p-2">Features</p>
            </div>
        </div>
    )
}

export default Sidebar