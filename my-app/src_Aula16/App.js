import './App.css';
// IMPORTANDO COMPONENTES DE CLASSE
import { Component } from 'react';
// Ou, de outra forma:
// import React from 'react';

class App extends Component {
// Ou, de outra forma:
// class App extends React.Component {

  // COMPONENTES DE CLASSE COM ESTADO (stateful)
  state = {
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

  render(){
    const { posts } = this.state;

    // O map() método de Array instâncias cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento da matriz de chamada. 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    return (
      <div className="App">
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
