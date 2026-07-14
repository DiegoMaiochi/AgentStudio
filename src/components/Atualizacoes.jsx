function Atualizacoes(){
    return(
        <div className="h-full m-12">
            <div>
                <h1 className="font-extrabold text-3xl">Atualizações</h1>
                <p className="text-gray-400">Confira as funcionalidades que estão sendo desenvolvidas para as próximas versões da plataforma.</p>
            </div>
            <div className="border-2 mt-4 p-4 rounded-2xl border-zinc-900 hover:border-zinc-700 transition duration-300 bg-zinc-900 flex justify-between">
                    <div>
                        <h2 className="text-xl">Tela de Dashboard</h2>
                        <p>Descrição: Adiciona um Dashboard mostrando projetos ativos, inativos e todos.</p>
                        <p className="text-amber-500 rounded-2xl">Em Desenvolvimento</p>
                    </div>
                </div>
            <div className="border-2 mt-4 p-4 rounded-2xl border-zinc-900 hover:border-zinc-700 transition duration-300 bg-zinc-900 flex justify-between">
                <div>
                    <h2 className="text-xl">Tela de Projetos</h2>
                    <p>Descrição: Adiciona uma tela onde os usuários possam visualizar, editar e criar os projetos.</p>
                    <p className="text-gray-400 rounded-2xl">Backlog</p>
                </div>
            </div>
            <div className="border-2 mt-4 p-4 rounded-2xl border-zinc-900 hover:border-zinc-700 transition duration-300 bg-zinc-900 flex justify-between">
                <div>
                    <h2 className="text-xl font-black">Tela de Atualizações</h2>
                    <p>Descrição: Adiciona uma tela de atualizações da plataforma.</p>
                    <p className="text-green-600 rounded-2xl">Concluído</p>
                </div>
            </div>
        </div>
    )
}

export default Atualizacoes