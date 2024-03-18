//importando css, './' = mesma pasta
import "./App.css";

// Tipagem necessaria em tsx, any = var(qualquer)
// MeuBotao vira uma tag
const MeuBotao = (props: any) => {
  // props indica acesso as propriedas
  return (
    // O que a tag MeuBotao vai inserir na tela
    //titulo é a propriedade em si
    <button> {props.titulo}</button>
  );
}
const Usuario = (props: any) => {
  return <h1>{props.Nome}</h1>
}
const listaDeTarefas = (props: any) => {
  return (
    <>
      <ul>
        {
          props.dados.map((item) => {
            return (<itemTarefa titulo={item.titulo} id={item.id} />)
          })
        }
      </ul>
    </>
  );
}
const itemTarefa = (props: any) => {
  return (<li key={props.id}>{props.titulo}</li>)
}

const App = () => {
  const usuario = {
    nome: 'Thiago',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  let nome;
  let usuarioNome;
  const tarefas = [
    "Primeria", "Segunda"
  ];
  const tarefasMundoReal = [
    { id: 1, titulo: "criar interface react", concluido: false },
    { id: 2, titulo: "conectar a uma api", concluido: false },
    { id: 3, titulo: "aprender sobre autenticação", concluido: false }
  ];



  return (
    //uma tag pai é obrigatoria, nesse caso é o div, todo tqm que ser feito dentro dele
    //className é parte da sintxe do jsx
    <div className="aplicacao">
      <h1>Infoweb  - {usuario.nome} - {nome ? nome : "Sem nome"}- {nome = "Minora"}</h1>
      {
        usuarioNome ?
          <Usuario Nome={usuarioNome} />
          : <MeuBotao titulo="Login" />
      }
      {
        //Se usuarioNOme tiver conteudo ele mostra Teste
        usuarioNome && "Teste"
      }
      <img
        className="avatar"
        src={usuario.imageUrl}
        alt={'Photo of ' + usuario.name}
        style={{
          width: usuario.imageSize,
          height: usuario.imageSize
        }}
      />
      <button>eu sou um botão html</button>
      {
        !usuarioNome && <MeuBotao titulo="Login" />
      }
      <br />
      <ul>
        <li>{tarefas}</li>
      </ul>
      <br />
      <ul>
        {
          tarefas.map((item, indice) => {
            return (<li key={indice}>{item}</li>)
          })
        }
      </ul>
      <listaDeTarefas dados={tarefasMundoReal} />
    </div>
  );
}

//jsx = React
export default App