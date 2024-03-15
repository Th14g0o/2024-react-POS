const App = () => {
  // let obj_tarefas = tarefas.map((item, indice) => { return { id: indice, titulo: item } });
  return (
    <>
      <div className="w-full h-screen bg-gray-100 pt-8 ">
        <div className="bg-white p-3 max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Tarefas do Professor</h1>
            <div className="mt-4 flex">
              <input className="w-80 border-b-2 border-gray-500 text-black px-2" type="text" placeholder="informe a tarefa" />
              <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
               
                <span>Adicionar</span>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <ul>
              <li className="p-2 rounded-lg">
                <div className="flex align-middle flex-row justify-between">
                  <div className="p-2">
                    <input type="checkbox" className="h-6 w-6 " checked={props.data.concluido} />
                  </div>
                  <div className="p-2">
                    <p className="text-lg text-black" >  {props.data.titulo} </p>
                  </div>
                  <button className="flex self-center h-min text-red-500 border-2 border-red-500 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" /></svg>
                    <span>Remove</span>
                  </button>
                </div>
                <hr className="mt-2" />
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button className="border-2 border-red-500 p-2 text-red-500">Limpar tarefas completadas</button>
            <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">Resetar lista de afazares</button>
          </div>
        </div>
      </div>
    </>
  );
}
// //importando css, './' = mesma pasta
// //import "./App.css";

// // Tipagem necessaria em tsx, any = var(qualquer)
// // MeuBotao vira uma tag
// const MeuBotao = (props : any) =>{
//   // props indica acesso as propriedas
//   return( 
//     // O que a tag MeuBotao vai inserir na tela
//     //titulo é a propriedade em si
//     <button> {props.titulo}</button>
//   );
// }

// const App = () => {
//     return (
//       //uma tag pai é obrigatoria, nesse caso é o div, todo tqm que ser feito dentro dele
//       //className é parte da sintxe do jsx
//       <div className="aplicacao">
//         <h1>Bem vindo ao mundo React</h1>
//         <button>eu sou um botão html</button>
//         <MeuBotao titulo="Sua mae" />
//         <MeuBotao titulo="Seu pai" />
//         <MeuBotao titulo="Você" />
//       </div>
//     );
//   }

// //jsx = React
export default App