import './App.css';
// IMPORTANDO COMPONENTES DE CLASSE
import { Component } from 'react';
// Ou, de outra forma:
// import React from 'react';

class App extends Component {
// Ou, de outra forma:
// class App extends React.Component {


  /*
  // COMPONENTES DE CLASSE COM ESTADO (stateful)
  state = {
    posts: []
  };
  // State and Lifecycle Method
  // https://legacy.reactjs.org/docs/state-and-lifecycle.html
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "O Título 1",
            body: "O Corpo 1",
          },
          {
            id: 2,
            title: "O Título 2",
            body: "O Corpo 2",
          },
          {
            id: 3,
            title: "O Título 3",
            body: "O Corpo 3",
          },
        ]
      });
    }, 5000);
  }
  */


  // COMPONENTES DE CLASSE COM ESTADO (stateful)
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "O Título 1",
        body: "O Corpo 1",
      },
      {
        id: 2,
        title: "O Título 2",
        body: "O Corpo 2",
      },
      {
        id: 3,
        title: "O Título 3",
        body: "O Corpo 3",
      },
    ]
  };

  // Criando a variável timeoutUpdate e atribuindo o valor nulo
  timeoutUpdate = null;

  // **************** Lifecycle Methods ****************
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  // ***************************************************

  // State and Lifecycle Method
  // https://legacy.reactjs.org/docs/state-and-lifecycle.html
  componentDidMount() {
    this.handleTimeout();
  }

  // State and Lifecycle Method
  // https://legacy.reactjs.org/docs/state-and-lifecycle.html
  // componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate() {
    // clearTimeout(this.timeoutUpdate);
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout = () => {
    // console.log("Hello!!!")
    const { posts, counter } = this.state;
    posts[0].title = "O Título 1 mudou...";
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }


  render(){
    const { posts, counter } = this.state;

    // O map() método de Array instâncias cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento da matriz de chamada. 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>  
        ))}
      </div>
    );
  }
}


export default App;
