import { useState } from "react";
//cria estado e função de atualização
import "./App.css";

const ListaDeTarefas = (props: any) => {
    return (
        <ul>
            {
                props.dados.map((item: any) => {
                    return (<ItemTarefa titulo={item.titulo} key={item.id} />)
                })
            }
        </ul>
    );
}
const ItemTarefa = (props: any) => {
    return (<li >{props.titulo}</li>)
}

const App = () => {
    const [ tarefa, setTarefa ] = useState("Informe nova tarefa");

    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: "criar interface react", concluido: false },
        { id: 2, titulo: "conectar a uma api", concluido: false },
        { id: 3, titulo: "aprender sobre autenticação", concluido: false }
    ]);

    const escutarCliqueBotao = () => {
        console.log('clicou');
        console.info(tarefa);
        const objeto = {
            id: tarefas.length + 1, titulo: tarefa, concluido: false
        };
        console.info(objeto);
        setTarefas([...tarefas, objeto]);
        console.info(tarefas);
    }

    const escutaModificacaoTexto = (evento: any) => {
        setTarefa(evento.target.value);
    }

    return (
        //uma tag pai é obrigatoria, nesse caso é o div, todo tqm que ser feito dentro dele
        //className é parte da sintxe do jsx
        <div className="aplicacao">
            <h1>Infoweb - React</h1>
            <div>
                <label htmlFor="tarefa">Informe a nova tarefa</label>
                <input type="text" id="tarefa" placeholder={tarefa} onChange={escutaModificacaoTexto} />
                <button onClick={escutarCliqueBotao}>Criar Nova tarefa</button>
            </div>

            <ListaDeTarefas dados={tarefas} />
        </div>
    );
}

//jsx = React
export default App