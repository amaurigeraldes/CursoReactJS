import logo from './logo.svg';
import './App.css';
// IMPORTANDO COMPONENTES DE CLASSE
import { Component } from 'react';



// 03 - COMPONENTES DE CLASSE COM ESTADO (stateful)
// Public class fields:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields

// Arrow functions:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Atribuição via desestruturação (destructuring assignment):
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

class App extends Component {

  /*
  // Incluindo um constructor
  constructor(props) {
    super(props);
    // Usando uma Arrow Function na Função handlePClick() e eliminando o .bind(this)
    // this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: "Amaurí Geraldes",
      counter: 0
    };
  }
  */

// Eliminando completamente o Construtor e deixando somente o Estado
state = {
    name: "Amaurí Geraldes",
    counter: 0
};

  handlePClick= (event) => {
    this.setState({ name: "Amaurí Moreira Geraldes" })
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state
    this.setState({ counter: counter +1 });
  }

  // Utilizando o mesmo render utilizado abaixo em 02 - UTILIZANDO COMPONENTES DE CLASSE 
  render(){
    // Incluindo as constantes name e counter
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o Link
          </a>
        </header>
      </div>
    );
  }
}



// 02 - UTILIZANDO COMPONENTES DE CLASSE
/*
class App extends Component {
  render(){
    // Utilizando o mesmo return utilizado abaixo em 01 - UTILIZANDO COMPONENTES DE FUNÇÃO
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/


// 01 - UTILIZANDO COMPONENTES DE FUNÇÃO
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
